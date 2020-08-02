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

router.get('/trainers', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'select * from kingsgym_db.trainers';

  connection.query(queryString, (err, rows, fields) => {
    if (err != null) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(rows); 

    }
  });
});

router.post('/trainer', (request, response) => {
  const connection = getNewConnection();
  const trainer = request.body
  const queryString = "insert into kingsgym_db.trainers (`trainer_name`,`trainer_details`,`trainer_image`) values ('"+trainer.trainer_name+"', '"+trainer.trainer_details+"', '"+trainer.trainer_image+"')";
  connection.query(queryString, (err, result, fields) => {
    if (err != null) {
      response.json({status:false, message:"Internal error occured while registeration, please try again later.", data:err});
    }
    else {
      response.json({status:true, message:"Trainer added successfully.", data:trainer});
    }
  })
});


