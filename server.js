const express = require("express");
const {
  addProductAction,
  getAllProductAction,
  getProductByIdAction,
  deleteProductByIdAction,
  updateProductByIdAction,
} = require("./actions/products-action");
const {
  addUsersAction,
  getAllUserAction,
  getUserByIdAction,
  updateUserByIdAction,
  deleteUserByIdAction,
} = require("./actions/users-action");
const {
  addOrderAction,
  getAllOrderAction,
  getOrderByIdAction,
  updateOrderByIdAction,
  deleteOrderByIdAction,
} = require("./actions/orders-action");

const app = express();
app.use(express.json());

// products
app.post("/api/products", addProductAction);

app.get("/api/products", getAllProductAction);

app.get("/api/products/:id", getProductByIdAction);

app.put("/api/products/:id", updateProductByIdAction);

app.delete("/api/products/:id", deleteProductByIdAction);

// users
app.post("/api/users", addUsersAction);

app.get("/api/users", getAllUserAction);

app.get("/api/users/:id", getUserByIdAction);

app.put("/api/users/:id", updateUserByIdAction);

app.delete("/api/users/:id", deleteUserByIdAction);

// orders
app.post("/api/orders", addOrderAction);

app.get("/api/orders", getAllOrderAction);

app.get("/api/orders/:id", getOrderByIdAction);

app.put("/api/orders/:id", updateOrderByIdAction);

app.delete("/api/orders/:id", deleteOrderByIdAction);

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
