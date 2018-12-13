const express = require("express");
const app = express();
const port = 3002;
const db = require("./database");
//requires index.js in database dir

app.use(express.static("public"));

//db queries
//create first row when checkout is clicked
//INSERT into checkoutSummary VALUES ();
//insert data at each forms submission
//UPDATE table_name SET field1 = new-value1, field2 = new-value2 [WHERE Clause]

const checkout = (req, res) => {
  const query = "INSERT INTO checkoutSummary VALUES ()";
  db.query(query, (err, result) => {
    if (err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  });
};

const createAccount = (req, res) => {
  const data = req.body;
  const query = `UPDATE checkoutSummary set name=${data.name}, email=${
    data.email
  }, password=${data.password}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  });
};

const createShipping = (req, res) => {
  const data = req.body;
  const query = `UPDATE checkoutSummary set address1=${
    data.address1
  }, address2=${data.address2}, city=${data.city}, state=${
    data.state
  }, zip_code=${data.zip_code}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  });
};

const createBilling = (req, res) => {
  const data = req.body;
  const query = `UPDATE checkoutSummary set credit_card=${
    data.credit_card
  }, expiry_date=${data.expiry_date}, CVV=${data.CVV}, billing_zip_code=${
    data.billing_zip_code
  }`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  });
};

app.post("/checkout", checkout);

app.post("/checkout/account", createAccount);

app.post("/checkout/shipping", createShipping);

app.post("/checkout/billing", createBilling);

app.listen(port, () => {
  console.log(`Mini app 3 is listening on ${port}`);
});
//mysql -u root < schema.sql
//
//create first row when checkout is clicked
//INSERT into checkoutSummary VALUES ();
//insert data at each forms submission
//Update checkoutSummary set name='foo', email='bar' where id=1;
