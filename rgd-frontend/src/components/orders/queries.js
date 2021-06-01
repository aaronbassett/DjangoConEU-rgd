import { gql } from "@apollo/client"

const GQL_ALL_ORDERS = gql`
  query {
    orders {
      name
      userId
      id
      total
      products {
        photo
        name
        size
        cut
        price
      }
      status
    }
  }
`
export { GQL_ALL_ORDERS }
