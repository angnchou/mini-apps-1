const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const port = 3003;

app.use(express.static("./client/dist"));

app.get("/connect4", (req, res) => {
  res.send("Connect 4!");
});

app.listen(port, () => {
  console.log(`mini app 4 listening on port ${port} !`);
});
