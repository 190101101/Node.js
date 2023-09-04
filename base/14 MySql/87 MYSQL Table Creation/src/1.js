const db = require('./db');

db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  db.query(`CREATE TABLE IF NOT EXISTS users (
      user_id INT(11) AUTO_INCREMENT,
      user_name VARCHAR(100),
      user_status INT(11),
      PRIMARY KEY (user_id)
    )`, (err, result) => {
      if(err){
        console.log(err);
      }
      console.log('result:', result);
  });

  
});
