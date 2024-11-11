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
    message: "karyawan dah ditambah",
    karyawan_id: karyawan.karyawan_id,
  });
});

app.get("/api/karyawans", (req, res) => {
  res.status(200).json(karyawans);
});

app.get("/api/karyawans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const karyawan = karyawans.find((p) => p.karyawan_id === id);
  if (karyawan) {
    res.status(200).json(karyawan);
  } else {
    res.status(404).json({ message: "karyawan undefind" });
  }
});

app.put("/api/karyawans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const karyawanIndex = karyawans.findIndex((p) => p.karyawan_id === id);
  if (karyawanIndex !== -1) {
    karyawans[karyawanIndex] = { ...karyawans[karyawanIndex], ...req.body };
    res.status(200).json({ message: "karyawan dah diupgrade" });
  } else {
    res.status(404).json({ message: "karyawannya gk ada" });
  }
});

app.delete("/api/karyawans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const karyawanIndex = karyawans.findIndex((p) => p.karyawan_id === id);
  if (karyawanIndex !== -1) {
    karyawans.splice(karyawanIndex, 1);
    res.status(200).json({ message: "karyawan berhasil dipecat" });
  } else {
    res.status(404).json({ message: "karyawan tidak ditemukan" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
