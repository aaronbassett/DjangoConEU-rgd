from decimal import Decimal
import typing
import strawberry


@strawberry.type
class Product:
    name: str
    description: str
    cut: str
    size: str
    photo: str
    stock: int
    price: Decimal


@strawberry.type
class Order:
    id: strawberry.ID
    name: str
    street: str
    state: str
    zipcode: str
    products: typing.List["Product"]
    total: Decimal
    status: str


@strawberry.input
class UpdateOrderStatusInput:
    status: str
