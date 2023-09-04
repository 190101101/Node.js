const db = require('./db');

db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  const query = `INSERT INTO users (user_name) VALUES ('cookies')`;
  db.query(query, (err, result) => {
    if(err){
      console.log(err);
    }

    console.log(result);
  });

});
