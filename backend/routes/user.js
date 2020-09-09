const express = require("express");
const router = express.Router();
const md5 = require("md5");
const connection = require("../database/connection");

router.post("/signup", (request, response) => {
  if (request.body.password && request.body.username) {
    let saltyHashedPassword = md5(request.body.password + process.env.SALT);

    const query = `INSERT IGNORE users (username, password) 
                 VALUES("${request.body.username}", "${saltyHashedPassword}")`;

    connection.mysql.query(query, function (err, results) {
      if (results.insertId > 0 && results.affectedRows > 0) {
        response.send({ statusCode: 1, type: 0 });
        nodemailer
          .send(request.body.email, welcomeEmail(request.body.email))
          .catch(console.error);
      } else {
        response.send({ satusCode: 2, type: 50 });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

module.exports = router;
