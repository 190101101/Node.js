const db = require('./db');
const ps = require('process');

const createOneToManyTable = () => {
  const person = `
    CREATE TABLE IF NOT EXISTS persons (
      person_id INT(11) AUTO_INCREMENT PRIMARY KEY,
      person_name VARCHAR(100),
      person_surname VARCHAR(100)
    )
  `;

  db.query(person, (err, result) => {
    if(err){
      console.log(err);
    }
    else{
      const social = `
        CREATE TABLE IF NOT EXISTS social_network (
          social_media_id INT(11) AUTO_INCREMENT PRIMARY KEY,
          social_media_name VARCHAR(100),
          person_id INT(11) NOT NULL,
          FOREIGN KEY (person_id) REFERENCES persons(person_id)
        )
      `;

      db.query(social, (err, result) => {
        if(err){
          console.log(err);
        }

        console.log(result);
      });

    }
  });
}

db.connect((err) => {
  if(err){
    console.log('error', err);
  }
    
  createOneToManyTable();
});


