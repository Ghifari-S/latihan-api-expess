const express = require("express");
const app = express();
app.use(express.json());

let users = [];
let userid = 1;

app.post("/api/users", (req, res) => {
  const user = req.body;
  user.user_id = userid++;
  users.push(user);
  res.status(201).json({
    message: "User berhasil ditambah",
    user_id: user.user_id,
  });
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((p) => p.user_id === id)
    if (user){
        res.status(200).json(user)
    } else{
        res.status(404).json({message: "user tdk ditemukan"})
    }
})

app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const userIndex = users.findIndex((p) => p.user_id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...req.body }; 
      res.status(200).json({ message: "user berhasil diperbarui" }); 
    } else {
      res.status(404).json({ message: "user tidak ditemukan" }); 
    }
  });
  
  
  app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const userIndex = users.findIndex((p) => p.user_id === id); 
    if (userIndex !== -1) {
      users.splice(userIndex, 1); 
      res.status(200).json({ message: "user berhasil dihapus" }); 
    } else {
      res.status(404).json({ message: "user tidak ditemukan" }); 
    }
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000"); 
  });
  
  