const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "checkout"
});

connection.connect();

connection.query("SELECT * FROM checkout", (err, data) => {
  console.log(data);
});

module.exports = connection;
