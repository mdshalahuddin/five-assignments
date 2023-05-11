const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.static("public"));
const books = [];
app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});
app.post("/books", (req, res) => {
  const { title, author, publishedDate } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and Author are required." });
  }

  const newBook = {
    id: uuidv4(), 
    title,
    author,
    publishedDate: publishedDate || "",
  };

  books.push(newBook);

  res.status(201).json(newBook);
});
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found." });
  }

  const deleteBook = books.splice(bookIndex, 1)[0];

  res.json({ message: "Book deleted successfully.", deleteBook });
});
app.listen(8000, () => {
  console.log("Server is running successfully");
});
