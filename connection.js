const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Sonor915$",
    database: "employees",
  },
  console.log("Connected!")
);

module.exports = db;
