const express = require("express");
express.static("./public");
const app = express();
const port = 8800;
app.use(express.static("./todo-reactjs/build"));

app.listen(port, () => {
  console.log(`listening on http://localhost:/${port}`);
});
