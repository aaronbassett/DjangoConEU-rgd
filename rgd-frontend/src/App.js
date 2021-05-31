import "antd/dist/antd.css"

import {
  Avatar,
  Card,
  Col,
  Divider,
  Drawer,
  Layout,
  List,
  Radio,
  Row,
  Table,
} from "antd"

import { useState } from "react"

const { Content } = Layout

function App() {
  const [userOrdersDrawerVisible, setUserOrdersDrawerVisible] = useState(false)

  const ALL_ORDERS_TABLE_COLUMNS = [
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
  ]

  const ORDERS = [
    {
      price: "25.00",
      photo: "https://i.imgur.com/OAuJFdd.png",
      name: "Django Green T-shirt",
      description: "M - fitted",
    },
    {
      price: "25.00",
      photo: "https://i.imgur.com/OAuJFdd.png",
      name: "Django Green T-shirt",
      description: "M - fitted",
    },
    {
      price: "25.00",
      photo: "https://i.imgur.com/OAuJFdd.png",
      name: "Django Green T-shirt",
      description: "M - fitted",
    },
  ]

  const ALL_ORDERS_DATA = [
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
    {
      id: "124324",
      state: "FL",
      total: "75.00",
      status: "open",
    },
  ]

  return (
    <>
      <Layout>
        <Content style={{ padding: 50 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                title={
                  <a onClick={() => setUserOrdersDrawerVisible(true)}>
                    Aaron Bassett - 12345
                  </a>
                }
                extra={<b>$75.00</b>}
                actions={[
                  <Radio.Group value="open">
                    <Radio.Button value="open">Open</Radio.Button>
                    <Radio.Button value="paid">Paid</Radio.Button>
                    <Radio.Button value="shipped">Shipped</Radio.Button>
                    <Radio.Button value="delivered">Delivered</Radio.Button>
                    <Radio.Button value="cancelled">Cancelled</Radio.Button>
                  </Radio.Group>,
                ]}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={ORDERS}
                  renderItem={(item) => (
                    <List.Item actions={[<b>{item.price}</b>]}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.photo} />}
                        title={item.name}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Divider />

          <Drawer
            title="Aaron Bassett - All Orders"
            placement="bottom"
            closable={true}
            onClose={() => setUserOrdersDrawerVisible(false)}
            visible={userOrdersDrawerVisible}
            key="bottom"
          >
            <Table
              columns={ALL_ORDERS_TABLE_COLUMNS}
              dataSource={ALL_ORDERS_DATA}
            />
          </Drawer>
        </Content>
      </Layout>
    </>
  )
}

export default App
