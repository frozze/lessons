const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "puzzle",
  password: "Yalla123!",
  database: 'puzzle'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con.promise();