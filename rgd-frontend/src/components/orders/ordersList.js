import { Col, Row, Skeleton, Spin } from "antd"

import { GQL_ALL_ORDERS } from "./queries"
import OrderCard from "./orderCard"
import _ from "lodash"
import { useEffect } from "react"
import { useQuery } from "@apollo/client"

function OrdersList(props) {
  const { loading, error, data } = useQuery(GQL_ALL_ORDERS)

  useEffect(() => {
    console.log("Loading:", loading)
    console.log("Error:", error)
    console.log("Orders:", data)
  }, [data, loading, error])

  return loading ? (
    <Row gutter={16}>
      <Col span={8}>
        <Spin tip="Fetching Orders...">
          <Skeleton title paragraph={{ rows: 4 }} active loading={loading} />
        </Spin>
      </Col>
    </Row>
  ) : (
    <>
      {_.chunk(data.orders, 3).map((ordersRow) => {
        return (
          <Row gutter={16}>
            {ordersRow.map((order) => {
              return (
                <Col span={8}>
                  <OrderCard
                    order={order}
                    showOrdersDrawerForUser={props.showOrdersDrawerForUser}
                  />
                </Col>
              )
            })}
          </Row>
        )
      })}
    </>
  )
}

export default OrdersList
