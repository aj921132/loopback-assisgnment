var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    database: "mysql",
    username: "root",
    password: "L00pBack"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});