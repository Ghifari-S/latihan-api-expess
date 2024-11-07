const express = require("express");
const app = express();
app.use(express.json());

let karyawans = [];
let karyawanid = 1;

app.post("/api/karyawans", (req, res) => {
  const karyawan = req.body;
  karyawan.karyawan_id = karyawanid++;
  karyawans.push(karyawan);
  res.status(201).json({
    message: "karyawan berhasil ditambah",
    karyawan_id: karyawan.karyawan_id,
  });
});

app.get("/api/karyawans", (req, res) => {
  res.status(200).json(karyawans);
});

app.get("/api/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find((p) => p.order_id === id)
    if (order){
        res.status(200).json(order)
    } else{
        res.status(404).json({message: "order tdk ditemukan"})
    }
})

app.put("/api/orders/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const orderIndex = orders.findIndex((p) => p.user_id === id);
    if (orderIndex !== -1) {
      orders[orderIndex] = { ...orders[orderIndexIndex], ...req.body }; 
      res.status(200).json({ message: "order berhasil diperbarui" }); 
    } else {
      res.status(404).json({ message: "order tidak ditemukan" }); 
    }
  });
  
  
  app.delete("/api/orders/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const orderIndex = orders.findIndex((p) => p.order_id === id); 
    if (orderIndex !== -1) {
      orders.splice(orderIndex, 1); 
      res.status(200).json({ message: "order berhasil dihapus" }); 
    } else {
      res.status(404).json({ message: "order tidak ditemukan" }); 
    }
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000"); 
  });
  
  