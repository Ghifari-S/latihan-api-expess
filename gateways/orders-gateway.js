let orders = [];
let orderid = 1;

// add order
module.exports.addOrderGateway = (order) => {
  order.order_id = orderid++;
  orders.push(order);
};

// get all order
module.exports.getAllOrderGateway = () => {
  return orders;
};

// get order by id
module.exports.getOrderByIdGateway = (id) => {
  const order = orders.find((p) => p.order_id === id);
  return order;
};

// update order by id
module.exports.updateOrderByIdGateway = (id,data) => {
    const orderIndex = orders.findIndex((p) => p.order_id === id);
    if (orderIndex !== -1) {
        orders[orderIndex] = { ...orders[orderIndex], ...data };
        return true
      } else {
        return true
      }
}
