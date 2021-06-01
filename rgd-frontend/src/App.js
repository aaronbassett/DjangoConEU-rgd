import "antd/dist/antd.css"

import { Layout } from "antd"
import OrdersList from "./components/orders/ordersList"
import UserOrdersDrawer from "./components/ordersDrawer/drawer"
import { useState } from "react"

const { Content } = Layout

function App() {
  const [quickLookUserId, setQuickLookUserId] = useState(null)

  return (
    <>
      <Layout>
        <Content style={{ padding: 50 }}>
          <OrdersList showOrdersDrawerForUser={setQuickLookUserId} />

          {quickLookUserId && (
            <UserOrdersDrawer
              userId={quickLookUserId}
              setQuickLookUserId={setQuickLookUserId}
            />
          )}
        </Content>
      </Layout>
    </>
  )
}

export default App
