const db = require('./db');
const ps = require('process');


const createStaff = (staff_cv, user) => {
  const query = `INSERT INTO staff_cv (staff_cv_name) VALUES (?)`;
  db.query(query, [staff_cv], (err, result) => {
    if(err){
      console.log(err);
    }
    const cvId = result.insertId;
    const query2 = `
      INSERT INTO staff (
        staff_name, 
        staff_surname, 
        staff_salary, 
        staff_cv_id
      ) VALUES (?,?,?,?)
    `;

    db.query(query2, [ 
      user.staff_name, 
      user.staff_surname, 
      user.staff_salary, 
      cvId 
    ], (err, result) => {
      if(err){
        console.log(err);
      }
    });

    console.log(result);
  });
}


db.connect((err) => {
  if(err){
    console.log('error', err);
  }

  createStaff('cookie', {
    staff_name: 'cookie',
    staff_surname: 'cookies',
    staff_salary: '3000',
  });
});
