from django.db import models
from django.conf import settings
from model_utils.models import TimeStampedModel, StatusModel
from model_utils import Choices

from rgd.addresses.models import Address
from rgd.products.models import Product


class Cart(TimeStampedModel, StatusModel):
    STATUS = Choices("open", "paid", "shipped", "delivered", "cancelled")

    shopper = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.shopper} ({self.address.zipcode}) - {self.status}"
