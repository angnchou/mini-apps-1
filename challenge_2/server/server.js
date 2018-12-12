const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const port = 3000;

const input = [];

app.use(bodyParser.urlencoded());
app.use(fileUpload()); //upload file
//bodyParser only parses json if content-type header is set to json
//default browser form post data ( inputField: hi&hello) in request object body encoding is urlencoded (looks like inputField=hi%26hello ) BUT form value is a string

app.get("/report", (req, res) => res.send("Hello GET"));

//converts obj to string/csv
/**
 * convert takes a nested obj and array, stores all values of the object and its children objects in an array of strings
 */
const convert = (obj, arr) => {
  arr = arr || [];
  const keys = ["firstName", "lastName", "county", "city", "role", "sales"];
  const person = keys.map(key => obj[key]).join(","); //returns all values of one, obj, add ',' in between
  arr.push(person);
  obj.children.forEach(child => {
    convert(child, arr);
  });
  return arr;
};

app.get("/download", (req, res) => {
  res.set("Content-Disposition", "attachment; filename=data.csv"); //sets header to create download file
  res.send(input.join("\n"));
});

app.post("/report", (req, res) => {
  //   console.log(req.body, "req.bodyyyyy", typeof req.body, "TYPEOF");

  let people = convert(JSON.parse(req.files.upload.data)); //array of strings that accumulate as user adds more input
  people.forEach(person => {
    input.push(person);
  });

  //   ); //array to string with \n; bodyparser turns it back to string so need to parse to obj
  res.send(
    //inputField is the form input name
    "<!DOCTYPE html><html><body>" +
      "<h1>Report Generator</h1>" +
      "<div>" +
      '<form id="form" method="POST" action="/report">' +
      '<textarea name="inputField" rows="10" cols="20"> ' +
      '</textarea> <input type="submit" value="Submit" />' +
      "</form>" +
      input.join("\n") +
      "</div></body></html>"
  );
});

//create array of all people objects - recursively

//use map to convert to csv

app.use(express.static("client"));
//relative to the directory from where you launch your node process.

app.listen(port, () => {
  console.log(`Mini app 2 listening on port ${port} !`);
});
