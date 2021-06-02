import random
from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth import get_user_model
from faker import Faker
from faker.providers import internet, address


from rgd.products.models import Product
from rgd.addresses.models import Address
from rgd.carts.models import Cart

User = get_user_model()


class Command(BaseCommand):
    help = "Populate database with demo data"

    def _create_users(self):
        fake = Faker()
        fake.add_provider(internet)

        for i in range(5):
            User.objects.create_user(
                fake.user_name(), fake.ascii_safe_email(), name=fake.name()
            )

    def _create_products(self):
        TYPES = [
            ("DjangoCon Australia 2020", "products/australia.png"),
            ("DjangoCon Africa 2020", "products/africa.jpeg"),
            ("Django Green", "products/green.png"),
            ("Django Purple", "products/purple.png"),
        ]
        SIZES = ["XS", "S", "M", "L", "XL"]
        CUTS = ["straight", "fitted"]
        PRICES = ["25", "30", "35"]

        for shirt_type in TYPES:
            for size in SIZES:
                for cut in CUTS:
                    Product.objects.create(
                        name=shirt_type[0],
                        description=f"Official {shirt_type[0]} T-Shirt",
                        cut=cut,
                        size=size,
                        photo=shirt_type[1],
                        stock=random.randint(1, 100),
                        price=random.choice(PRICES),
                    )

    def _create_addresses(self):
        fake = Faker()
        fake.add_provider(address.en_US)

        for i in range(5):
            Address.objects.create(
                name=fake.name(),
                street=fake.street_address(),
                state=fake.state_abbr(),
                zipcode=fake.zipcode(),
            )

    def _create_carts(self):
        STATUS = ["open", "paid", "shipped", "delivered", "cancelled"]

        for i in range(5):
            cart = Cart.objects.create(
                shopper=User.objects.all().order_by("?")[0],
                address=Address.objects.all().order_by("?")[0],
                status=random.choice(STATUS),
            )
            cart.products.add(
                *Product.objects.all().order_by("?")[: random.randint(2, 8)]
            )
            cart.save()

    def handle(self, *args, **options):
        self._create_users()
        self._create_products()
        self._create_addresses()
        self._create_carts()
