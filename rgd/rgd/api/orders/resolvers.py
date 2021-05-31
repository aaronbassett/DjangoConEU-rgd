import strawberry
from django.contrib.auth import get_user_model
from .types import Order, Product, UpdateOrderStatusInput

from rgd.carts.models import Cart

User = get_user_model()


def compile_order(cart):
    products = [
        Product(
            name=product.name,
            description=product.description,
            cut=product.cut,
            size=product.size,
            photo=product.photo,
            stock=product.stock,
            price=product.price.amount,
        )
        for product in cart.products.all()
    ]

    order_total = sum([product.price.amount for product in cart.products.all()])

    return Order(
        id=cart.id,
        name=cart.address.name,
        street=cart.address.street,
        state=cart.address.state,
        zipcode=cart.address.zipcode,
        products=products,
        total=order_total,
        status=cart.status,
    )


def get_order(id: strawberry.ID):
    return compile_order(Cart.objects.get(id=id))


def get_orders():
    return [compile_order(cart) for cart in Cart.objects.all()]


def get_orders_for_user(id: strawberry.ID):
    user = User.objects.get(id=id)
    return [compile_order(cart) for cart in Cart.objects.filter(shopper=user)]


def get_open_orders():
    return [compile_order(cart) for cart in Cart.open.all()]


def update_order_status(id: strawberry.ID, input: UpdateOrderStatusInput):
    Cart.objects.filter(id=id).update(status=input.status)
    return get_order(id)
