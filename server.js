const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});