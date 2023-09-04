const db = require('./db');

db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  const values = [
    ['cookie', 1], ['apsi', 1], ['pepi', 1], ['ketty', 1],
  ];
  const query = `INSERT INTO users (user_name, user_status) VALUES ?`;

  db.query(query, [values], (err, result) => {
    if(err){
      console.log(err);
    }

    console.log(result);
  });

});
