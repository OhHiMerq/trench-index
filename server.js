const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 5500;
app.listen(port, () => {
  console.log(`Server Listening at http://0.0.0.0:${port}`);
});
