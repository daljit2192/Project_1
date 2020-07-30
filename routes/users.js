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
});
  
function getNewConnection(){
  return pool;
}

router.get('/users', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'select * from kingsgym_db.users';

  connection.query(queryString, (err, rows, fields) => {
    if (err != null) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(rows); 

    }
  });
});

router.post('/user', (request, response) => {
  const connection = getNewConnection();
  const user = request.body
  const queryString = "insert into kingsgym_db.users (`first_name`,`last_name`,`email`,`phone_number`,`password`) values ('"+user.first_name+"', '"+user.last_name+"', '"+user.email+"', '"+user.phone_number+"','"+user.password+"')";
  connection.query(queryString, (err, result, fields) => {
    if (err != null) {
      response.json({status:false, message:"Internal error occured while registeration, please try again later.", data:err});
    }
    else {
      response.json({status:true, message:"Registeration completed successfully.", data:user});
    }
  })
});





