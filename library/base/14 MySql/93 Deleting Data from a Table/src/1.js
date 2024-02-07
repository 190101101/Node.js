const db = require('./db');
const ps = require('process');

const deleteByName = (name) => {
  const query = `DELETE FROM users WHERE user_name=?`;

  db.query(query, [name], (err, result) => {
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
    
  deleteByName('apsis');
});


