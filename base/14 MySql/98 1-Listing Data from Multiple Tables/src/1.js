const db = require('./db');
const ps = require('process');

db.connect((err) => {
  if(err){
    console.log('error', err);
  }
    
  getAllRelationsById(3);
});


