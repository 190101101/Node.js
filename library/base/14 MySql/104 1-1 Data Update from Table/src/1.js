const db = require('./db');
const ps = require('process');


const updateCv = (id, staff_cv_name) => {
  const query = `
    SELECT * FROM staff WHERE staff_id = ?
  `;
  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }

    staff_cv_id = result[0].staff_cv_id;

    const query2 = `UPDATE staff_cv SET staff_cv_name = ?  WHERE staff_cv_id = ?`;

    db.query(query2, [staff_cv_name, staff_cv_id], (err, result) => {
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
  
  updateCv(1, 'cookie');

});
