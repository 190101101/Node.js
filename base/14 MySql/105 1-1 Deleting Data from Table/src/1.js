const db = require('./db');
const ps = require('process');


const deleteCv = (id) => {
  const query = `SELECT * FROM staff WHERE staff_id = ?`;
  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }

    staff_cv_id = result[0].staff_cv_id;
    console.log(staff_cv_id);

    const query2 = `DELETE FROM staff_cv WHERE staff_cv_id = ?`;

    db.query(query2, [staff_cv_id], (err, result) => {
      if(err){
        console.log(err);
      }
      console.log(result);
    });
  });
}


db.connect((err) => {
  if(err){
    console.log('error', err);
  }
  
  deleteCv(1);

});
