const db = require('./db');
const ps = require('process');

const findByNameOrId = (name, id) => {
  const query = `SELECT * FROM users WHERE user_name=? or user_id=?`;

  db.query(query, [name, id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

db.connect((err) => {
  if(err){
    console.log('error', err);
  }
  
  findByNameOrId('cookie', 1);
});


