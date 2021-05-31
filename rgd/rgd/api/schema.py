from typing import Optional

import strawberry

from .orders.resolvers import (
    get_order,
    get_orders,
    get_orders_for_user,
    get_open_orders,
    update_order_status,
)
from .orders.types import Order


@strawberry.type
class Query:
    order: Optional[Order] = strawberry.field(resolver=get_order)
    orders: list[Order] = strawberry.field(resolver=get_orders)
    orders_for_user: list[Order] = strawberry.field(resolver=get_orders_for_user)
    open_orders: list[Order] = strawberry.field(resolver=get_open_orders)


@strawberry.type
class Mutation:
    update_order_status: Optional[Order] = strawberry.mutation(
        resolver=update_order_status
    )


schema = strawberry.Schema(Query, Mutation)
