'use strict';
const mysql = require('mysql');


//conexão local com o banco
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MySql2021!',
  database : 'GECP'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Conectado ao banco!");
});
module.exports = dbConn;