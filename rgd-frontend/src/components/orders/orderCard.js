import { Avatar, Button, Card, List, Radio } from "antd"

function OrderCard(props) {
  return (
    <Card
      title={
        <Button
          type="link"
          size="large"
          onClick={() => props.showOrdersDrawerForUser(props.order.userId)}
        >
          {props.order.name} - {props.order.id}
        </Button>
      }
      extra={<b>${props.order.total}</b>}
      actions={[
        <Radio.Group value={props.order.status}>
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
        dataSource={props.order.products}
        renderItem={(product) => (
          <List.Item actions={[<b>${product.price}</b>]}>
            <List.Item.Meta
              avatar={<Avatar src={`/media/${product.photo}`} />}
              title={product.name}
              description={
                <i>
                  {product.size} - {product.cut}
                </i>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default OrderCard
