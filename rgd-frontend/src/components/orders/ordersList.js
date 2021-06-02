import { Col, Divider, Row, Skeleton, Spin } from "antd"

import { GQL_ALL_ORDERS } from "./queries"
import OrderCard from "./orderCard"
import _ from "lodash"
import { useEffect } from "react"
import { useQuery } from "@apollo/client"

function OrdersList(props) {
  const { loading, error, data } = useQuery(GQL_ALL_ORDERS, {
    pollInterval: 500,
  })

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
          <>
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

            <Divider />
          </>
        )
      })}
    </>
  )
}

export default OrdersList
