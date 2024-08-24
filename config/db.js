const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12727635',
  password: 'Q7sTEkH2Il',
  database: 'sql12727635',
  port : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;
