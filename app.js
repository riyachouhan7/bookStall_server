const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router) //localhost:5000/books


mongoose.connect(
  "mongodb+srv://riya:riya123@bookstall.lgfpgls.mongodb.net/bookstall?retryWrites=true&w=majority"
)
.then(()=>console.log("Database Connected!"))
.then(() => {
  app.listen(5000);
}).catch((err) => console.log(err));