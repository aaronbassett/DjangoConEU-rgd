import { gql } from "@apollo/client"

const GQL_CHANGE_ORDER_STATUS = gql`
  mutation ChangeOrderStatus($id: ID!, $status: String!) {
    updateOrderStatus(id: $id, input: { status: $status }) {
      id
      status
    }
  }
`
export { GQL_CHANGE_ORDER_STATUS }
