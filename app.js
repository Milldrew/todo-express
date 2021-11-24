const express = require("express");
const { join } = require("path");
express.static("./public");
const app = express();
const port = 8080;
const staticDir = "./build";
app.use(express.static(staticDir));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, staticDir) + "/index.html");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:/${port}`);
});
