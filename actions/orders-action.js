const { addOrderGateway, getAllOrderGateway } = require("../gateways/orders-gateway");

// add order
module.exports.addOrderAction = (req, res) => {
  const order = req.body;
  addOrderGateway(order);
  res.status(201).json({
    message: "order berhasil ditambah",
    order_id: order.order_id,
  });
};

// get all order
module.exports.getAllOrderAction = (req, res) => {
  res.status(200).json(getAllOrderGateway());
};

// get order by id
module.exports.getOrderByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "order tdk ditemukan" });
  }
};

// update order by id
module.exports.updateOrderByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const result = updateOrderByIdGateway(id,req.body)
  if (result) {
    res.status(200).json({ message: "order berhasil diperbarui" });
  } else {
    res.status(404).json({ message: "order tidak ditemukan" });
  }
};

// delete order by id
module.exports.deleteOrderByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex((p) => p.order_id === id);
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    res.status(200).json({ message: "order berhasil dihapus" });
  } else {
    res.status(404).json({ message: "order tidak ditemukan" });
  }
};

