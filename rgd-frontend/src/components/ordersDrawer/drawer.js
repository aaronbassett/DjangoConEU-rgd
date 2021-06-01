import { Drawer, Spin, Table } from "antd"

import { GQL_ALL_ORDERS_FOR_USER } from "./queries"
import { useQuery } from "@apollo/client"

function UserOrdersDrawer(props) {
  const { loading, error, data } = useQuery(GQL_ALL_ORDERS_FOR_USER, {
    variables: { id: props.userId },
  })

  return loading ? (
    <Drawer
      title={<Spin size="large" />}
      placement="bottom"
      closable={false}
      visible={true}
      key="bottom"
      height={500}
    />
  ) : (
    <Drawer
      title={data.ordersForUser[0].name}
      placement="bottom"
      closable={true}
      destroyOnClose={true}
      onClose={() => props.setQuickLookUserId(null)}
      visible={true}
      key="bottom"
      height={500}
    >
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
          },
          {
            title: "State",
            dataIndex: "state",
            key: "state",
          },
          {
            title: "Total",
            dataIndex: "total",
            key: "total",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
        ]}
        dataSource={data.ordersForUser}
      />
    </Drawer>
  )
}

export default UserOrdersDrawer
