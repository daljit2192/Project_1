const mysql = require('mysql');
const express = require('express');
const router = express.Router();
module.exports = router;

const pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'kingsgym_db',
  insecureAuth : true
});
  
function getNewConnection(){
  return pool;
}

router.get('/blogs', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'SELECT * FROM blogs';

  connection.query(queryString, (err, rows, fields) => {
    if (err != null) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(rows); 
    }
  });
});


