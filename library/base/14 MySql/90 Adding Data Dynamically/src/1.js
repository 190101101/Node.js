const db = require('./db');
const ps = require('process');


db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  const query = `INSERT INTO users (user_name, user_status) VALUES (?, ?)`;

  const user_name = ps.argv[2];
  const user_status = ps.argv[3];

  db.query(query, [user_name, user_status], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });

});


