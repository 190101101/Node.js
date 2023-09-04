const db = require('./db');
const ps = require('process');

const deleteById = (id) => {
  const query = `DELETE FROM persons WHERE person_id=?`;

  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const createSocialMediaWithUser = (person_id, media_name) => {
  const query = `INSERT INTO social_network (person_id, social_media_name) VALUES (?, ?)`;
  db.query(query, [person_id, media_name], (err, result) => {
    if(err){
      console.log(err);
    }

    console.log(result);
  });
}

const createMultipleRecord = () => {
  const values = [['cookie', 'cookies'], ['apsi', 'apsis'], ['pepi', 'pepis'], ['ketty', 'kettys'], ];
  const query = `INSERT INTO persons (person_name, person_surname) VALUES ?`;

  db.query(query, [values], (err, result) => {
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

  deleteById(4);
});
