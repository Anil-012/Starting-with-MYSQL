const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'anilbd',
  password: 'Anil@1233'
}); 

module.exports = pool.promise(); 