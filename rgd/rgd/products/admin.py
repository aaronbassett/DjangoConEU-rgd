from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "cut", "size", "stock", "price")


admin.site.register(Product, ProductAdmin)
