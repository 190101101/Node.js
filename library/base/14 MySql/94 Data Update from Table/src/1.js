const db = require('./db');
const ps = require('process');

const updateNameById = (name, id) => {
  const query = `UPDATE users SET user_name=? WHERE user_id=?`;

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
    
  updateNameById('mapsi', 15);
});


