const db = require('./db');


db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  db.query('CREATE DATABASE node', (err, result) => {
    if(err){
      console.log('err', err);
    }

    console.log('result', result);
  });
});
