from django.db import models
from model_utils.models import TimeStampedModel
from model_utils import Choices

from djmoney.models.fields import MoneyField


class Product(TimeStampedModel):
    SIZES = Choices("XS", "S", "M", "L", "XL")
    CUTS = Choices("straight", "fitted")

    name = models.CharField(max_length=50)
    description = models.TextField()
    cut = models.CharField(choices=CUTS, default=CUTS.straight, max_length=10)
    size = models.CharField(choices=SIZES, default=SIZES.M, max_length=2)
    photo = models.ImageField(upload_to="products")
    stock = models.PositiveSmallIntegerField()
    price = MoneyField(max_digits=14, decimal_places=2, default_currency="USD")

    def __str__(self):
        return f"{self.name} - {self.cut}/{self.size}"
