const express = require("express");
const app = express();
const port = 3002;

app.use(express.static("public"));

app.get("/checkout", (req, res) => {
  res.send("CHECK OUT!");
});

app.listen(port, () => {
  console.log(`Mini app 3 is listening on ${port}`);
});
