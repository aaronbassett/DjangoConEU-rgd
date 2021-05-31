from django.db import models
from model_utils.models import TimeStampedModel

from localflavor.us.models import USStateField, USZipCodeField


class Address(TimeStampedModel):

    name = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    state = USStateField()
    zipcode = USZipCodeField()

    def __str__(self):
        return f"{self.name} ({self.zipcode})"
