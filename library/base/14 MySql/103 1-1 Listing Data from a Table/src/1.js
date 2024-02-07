const db = require('./db');
const ps = require('process');


const getAllRelations = () => {
  const query = `
    SELECT * FROM staff 
    INNER JOIN staff_cv ON 
    staff.staff_cv_id = staff_cv.staff_cv_id
  `;
  db.query(query, [], (err, result) => {
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
  
  getAllRelations();

});
