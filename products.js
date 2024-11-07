const express = require("express"); // impor express

const app = express(); // buat aplikasi expres
app.use(express.json()); // body-parser untuk mengolah JSON

let products = []; // untuk menyimpan produk
let productId = 1; // inisialisasi ID produk

// Membuat server dan perintah POST untuk menambah produk
app.post("/api/products", (req, res) => {
  const product = req.body; // mengambil body 
  product.product_id = productId++; // menambahkan ID produk
  products.push(product); // menyimpan produk ke array  
  res.status(201).json({ // mengirimkan respons dengan status 201
    message: "Produk berhasil ditambahkan",
    product_id: product.product_id,
  });
});

// dapatkan semua produk
app.get("/api/products", (req, res) => {
  res.status(200).json(products); // mengirimkan array produk
});

// dapatkan produk berdasarkan ID
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id); // mengambil ID dari parameter URL
  const product = products.find((p) => p.product_id === id); // mencari produk
  if (product) {
    res.status(200).json(product); // jika ditemukan, maka produk dikirim 
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" }); // jika tidak, muncul pesan error
  }
});

// perbarui produk berdasarkan ID
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id); // ambil ID dari parameter URL
  const productIndex = products.findIndex((p) => p.product_id === id); // mencari index produk
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...req.body }; // memperbarui produk
    res.status(200).json({ message: "Produk berhasil diperbarui" }); // mengirimkan respons
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" }); // jika tidak ditemukan
  }
});

// hapus produk berdasarkan ID
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id); // ambil ID dari parameter URL
  const productIndex = products.findIndex((p) => p.product_id === id); // mencari index produk
  if (productIndex !== -1) {
    products.splice(productIndex, 1); // menghapus produk dari array
    res.status(200).json({ message: "Produk berhasil dihapus" }); // mengirimkan respons
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" }); // jika tidak ditemukan
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000"); 
});
