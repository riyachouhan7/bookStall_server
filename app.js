const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router) //localhost:5000/books

const port = process.env.PORT || 5001; // Default to port 5001 if PORT is not set

app.get("/",(req,res)=>{
  res.send("Hellow world");
})



mongoose.connect(
  "mongodb+srv://riya:riya123@bookstall.lgfpgls.mongodb.net/bookstall?retryWrites=true&w=majority"
)
.then(()=>console.log("Database Connected!"))
.then(() => {
  app.listen(port);
}).catch((err) => console.log(err));