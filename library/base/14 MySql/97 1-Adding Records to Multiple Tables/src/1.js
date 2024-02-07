const db = require('./db');
const ps = require('process');

const createRecord = () => {
  const query = `INSERT INTO persons (person_name, person_surname) VALUES ('cookie', 'cookies')`;
  db.query(query, (err, result) => {
    if(err){
      console.log(err);
    }

    console.log(result);
  });
}

const createSocialMediaWithUser = () => {
  const query = `INSERT INTO social_network (person_id, social_media_name) VALUES ('4','instagram')`;
  db.query(query, (err, result) => {
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
    
  createSocialMediaWithUser();
});


