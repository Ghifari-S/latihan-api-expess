const express = require("express");
const {
  addOrderAction,
  getAllOrderAction,
  getOrderByIdAction,
  updateOrderByIdAction,
  deleteOrderByIdAction,
} = require("./actions/orders-action");
const app = express();
app.use(express.json());



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
