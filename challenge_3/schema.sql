
CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE checkoutSummary (

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name  VARCHAR(50),
      email VARCHAR(320),
      password INT,
      address1 VARCHAR(200),
      address2 VARCHAR(200),
      city  VARCHAR(50),
      state VARCHAR(50),
      zip_code INT,
      credit_card INT,
      expiry_date  DATE,
      CVV  INT,
      billing_zip_code INT
);

/*mysql -u root < schema.sql
//
//create first row when checkout is clicked
  //INSERT into checkoutSummary VALUES ();
//insert data at each forms submission
    //Update checkoutSummary set name='foo', email='bar' where id=1;
*/