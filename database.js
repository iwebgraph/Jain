const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "pCDeM9cEcn",
    password: "r3aT7tjZVj",
    database: "pCDeM9cEcn",
    multipleStatements: true
  },);

connection.connect(function(error) {
  if (!!error) {
    console.log("Errror");
  } else {
    console.log("Inside bd Connected");
  }
});

module.exports = connection;
