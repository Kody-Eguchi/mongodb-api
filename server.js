const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.wgpvecg.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
