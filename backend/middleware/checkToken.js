const connection = require("../database/connection");

// check token middleware
const checkToken = (request, response, next) => {
  if (request.headers.token) {
    let query = `SELECT user_id FROM sessions
                  WHERE token LIKE ?`;

    connection.mysql.query(query, request.headers.token, function (
      err,
      results
    ) {
      if (results.length === 1) {
        //append the user id to the request
        request.user_id = results[0].user_id;
        next();
      } else {
        response.send("Hackers Beware!");
      }
    });
  } else {
    response.send("Hackers Beware!");
  }
};

module.exports = checkToken;
