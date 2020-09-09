const express = require("express");
const router = express.Router();
const connection = require("../database/connection");

router.get("/all", (request, response) => {
  if (request.body.user_id) {
    const query = `SELECT * FROM tasks 
                   WHERE user_id = ${request.body.user_id}`;
    connection.mysql.query(query, function (err, results) {
      if (results.length >= 0) {
        response.send({ statusCode: 1, type: 0, tasks: results });
      } else {
        response.send({ statusCode: 2, type: "TBD" });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

router.post("/add", (request, response) => {
  if (
    request.body.user_id &&
    request.body.task 
  ) {
    const query = `INSERT tasks   (user_id,
                                  task) 
                    VALUES("${request.body.user_id}",
                           "${request.body.taks}")`;

    connection.mysql.query(query, function (err, results) {
      if (results.insertId > 0 && results.affectedRows > 0) {
        response.send({ statusCode: 1, type: 0 });
      } else {
        response.send({ statusCode: 2, type: "TBD" });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

router.post("/delete", (request, response) => {
  if (request.body.id) {
    const query = `DELETE FROM tasks 
                   WHERE user_id LIKE "${request.body.user_id}"`;

    connection.mysql.query(query, function (err, results) {
      if (results.affectedRows > 0) {
        response.send({ statusCode: 1, type: 0 });
      } else {
        response.send({ statusCode: 2, type: "TBD" });
      }
    });
  } else {
    response.send({ statusCode: 2, type: "TBD"});
  }
});

router.post("/update", (request, response) => {
  if (
    request.body.id &&
    request.body.user_id &&
    request.body.task
  ) {
    const query = `UPDATE tasks SET task = "${request.body.task}"
                          WHERE id LIKE "${request.body.id}" 
                          AND user_id LIKE "${request.body.user_id}"`;

    connection.mysql.query(query, function (err, results) {
      if (results.affectedRows > 0) {
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
