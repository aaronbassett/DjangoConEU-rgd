import { gql } from "@apollo/client"

const GQL_ALL_ORDERS_FOR_USER = gql`
  query UserOrders($id: ID!) {
    ordersForUser(id: $id) {
      id
      name
      state
      total
      status
    }
  }
`

export { GQL_ALL_ORDERS_FOR_USER }
