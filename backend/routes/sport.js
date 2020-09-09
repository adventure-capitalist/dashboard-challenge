const express = require("express");
const router = express.Router();
const connection = require("../database/connection");

router.get("/retrieve", (request, response) => {
    if (request.body.user_id) {
        const query = `SELECT *
                          FROM sport
                            WHERE user_id LIKE "${request.body.user_id}"
                        `;
        connection.mysql.query(query, function (err, results) {
          response.send({ statusCode: 1, type: 0});
        });
      }
    });


    router.post("/store", (request, response) => {
        if (
          request.body.user_id &&
          request.body.team
        ) {
          const query = `UPDATE sport SET team = "${request.body.team}" 
                            WHERE user_id = "${request.body.user_id}"`;

          connection.mysql.query(query, function (err, results) {
            console.log(results, err);
            if (results.insertId > 0 && results.affectedRows > 0) {
              response.send({ statusCode: 1, type: 0 });
            } else {
              response.send({ statusCode: 2, type: "TBD" });
            }
          });
        } else {
          response.send({ statusCode: 2, type: "TBD" });
        }
      });

      module.exports = router;