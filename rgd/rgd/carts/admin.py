from django.contrib import admin
from .models import Cart


class CartAdmin(admin.ModelAdmin):
    list_display = ("shopper", "address", "status")


admin.site.register(Cart, CartAdmin)
