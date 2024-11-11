const express = require("express");
const {
  addProductAction,
  getAllProductAction,
  getProductByIdAction,
  deleteProductByIdAction,
  updateProductByIdAction,
} = require("../actions/products-action");
const { updateProductById } = require("../gateways/product-gateway");

const app = express();
app.use(express.json());

let products = [];
let productId = 1;

app.post("/api/products", addProductAction);

app.get("/api/products", getAllProductAction);

app.get("/api/products/:id", getProductByIdAction);

app.put("/api/products/:id", updateProductByIdAction);

app.delete("/api/products/:id", deleteProductByIdAction);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
