from django.apps import AppConfig


class CartsConfig(AppConfig):
    name = "rgd.carts"
    verbose_name = "Carts"

    def ready(self):
        try:
            import rgd.carts.signals  # noqa F401
        except ImportError:
            pass
