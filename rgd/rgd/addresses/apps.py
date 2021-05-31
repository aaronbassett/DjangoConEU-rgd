from django.apps import AppConfig


class AddressesConfig(AppConfig):
    name = "rgd.addresses"
    verbose_name = "Addresses"

    def ready(self):
        try:
            import rgd.addresses.signals  # noqa F401
        except ImportError:
            pass
