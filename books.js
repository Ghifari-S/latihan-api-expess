const express = require("express");
const app = express();
app.use(express.json());

let books = [];
let bookid = 1;

app.post("/api/books", (req, res) => {
  const book = req.body;
  book.book_id = bookid++;
  books.push(book);
  res.status(201).json({
    message: "buku berhasil ditambah",
    book_id: book.book_id,
  });
});

app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((p) => p.book_id === id)
    if (book){
        res.status(200).json(book)
    } else{
        res.status(404).json({message: "buku tdk ditemukan"})
    }
})

app.put("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const bookIndex = books.findIndex((p) => p.book_id === id);
    if (bookIndex !== -1) {
      books[bookIndex] = { ...books[bookIndex], ...req.body }; 
      res.status(200).json({ message: "buku berhasil diperbarui" }); 
    } else {
      res.status(404).json({ message: "buku tidak ditemukan" }); 
    }
  });
  
  
  app.delete("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const bookIndex = books.findIndex((p) => p.book_id === id); 
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1); 
      res.status(200).json({ message: "bku berhasil dihapus" }); 
    } else {
      res.status(404).json({ message: "buku tidak ditemukan" }); 
    }
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000"); 
  });
  
  