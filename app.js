const express = require("express");
const data = require("./data");
const app = express();
const port = 8000;

const dataRoute = "/api/products";

app.get(dataRoute, (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
