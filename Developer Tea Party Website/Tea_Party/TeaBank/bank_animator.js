const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 1, 
    host: "localhost",
    user: "root",
    password: "",
    database: "tea_party",
    debug: false
});

connectionPool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });