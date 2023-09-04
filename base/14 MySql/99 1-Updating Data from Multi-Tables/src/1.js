const db = require('./db');
const ps = require('process');

const updateById = (media_id, person_id, media_name) => {
  const query = `
    UPDATE social_network SET social_media_name = ? 
    WHERE person_id = ? AND social_media_id = ?
  `;

  db.query(query, [media_name, person_id, media_id], (err, result) => {
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
    
  updateById(1, 3, 'pinterest');
});


