const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from node world");
});

app.listen(port, () => {
  console.log("Hello this is my first node.js");
});
