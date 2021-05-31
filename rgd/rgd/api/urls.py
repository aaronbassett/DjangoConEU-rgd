from django.urls import path
from strawberry.django.views import GraphQLView
from .schema import schema


urlpatterns = [
    path(r"", GraphQLView.as_view(schema=schema)),
]
