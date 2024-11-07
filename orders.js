const express = require("express");
const app = express();
app.use(express.json());

let orders = [];
let orderid = 1;

app.post("/api/orders", (req, res) => {
  const order = req.body;
  order.order_id = orderid++;
  orders.push(order);
  res.status(201).json({
    message: "order berhasil ditambah",
    order_id: order.order_id,
  });
});

app.get("/api/orders", (req, res) => {
  res.status(200).json(orders);
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
    const orderIndex = orders.findIndex((p) => p.order_id === id);
    if (orderIndex !== -1) {
      orders[orderIndex] = { ...orders[orderIndex], ...req.body }; 
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
  
  