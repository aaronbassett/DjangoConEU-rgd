from django.contrib import admin
from .models import Address


class AddressAdmin(admin.ModelAdmin):
    list_display = ("name", "street", "state", "zipcode")


admin.site.register(Address, AddressAdmin)
