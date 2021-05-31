from django.apps import AppConfig


class ProductsConfig(AppConfig):
    name = "rgd.products"
    verbose_name = "Products"

    def ready(self):
        try:
            import rgd.products.signals  # noqa F401
        except ImportError:
            pass
