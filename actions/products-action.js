const {
  addProductGateway,
  getAllProductGateway,
  getProductByIdGateway,
  updateProductByIdGateway,
  deleteProductByIdGateway,
} = require("../gateways/product-gateway");

// add product
module.exports.addProductAction = (req, res) => {
  const product = req.body;
  addProductGateway(product);
  res.status(201).json({
    message: "Produk berhasil ditambahkan",
    product_id: product.product_id,
  });
};

// get all product
module.exports.getAllProductAction = (req, res) => {
  res.status(200).json(getAllProductGateway());
};

// get product by id
module.exports.getProductByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const product = getProductByIdGateway(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" });
  }
};

// update product by id
module.exports.updateProductByIdAction = (req, res) => {
  const id = parseInt(req.params.id);
  const result = updateProductByIdGateway(id,req.body);
  if (result) {
    res.status(200).json({ message: "Produk berhasil diperbarui" });
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" });
  }
};

// delete product by id
module.exports.deleteProductByIdAction = (req, res) => {
    const id = parseInt(req.params.id); 
    const deleteResult = deleteProductByIdGateway(id)
    if (deleteResult) {
      res.status(200).json({ message: "Produk berhasil dihapus" }); 
    } else {
      res.status(404).json({ message: "Produk tidak ditemukan" }); 
    }
  }
