const mysql = require("mysql");
const data = {};

data.mysql = mysql.createConnection({
  database: process.env.DATABASE,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 3306,
});

data.mysql.connect();

module.exports = data;
