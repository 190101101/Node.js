const db = require('./db');
const ps = require('process');

const createOneToOneTable = () => {
  const staff_cv = `
    CREATE TABLE IF NOT EXISTS staff_cv (
      staff_cv_id INT(11) AUTO_INCREMENT PRIMARY KEY,
      staff_cv_name VARCHAR(100)
    )
  `;

  db.query(staff_cv, (err, result) => {
    if(err){
      console.log(err);
    }
    else{
      const staff = `
        CREATE TABLE IF NOT EXISTS staff (
          staff_id INT(11) AUTO_INCREMENT PRIMARY KEY,
          staff_name VARCHAR(100),
          staff_surname VARCHAR(100),
          staff_salary INT(11),
          staff_cv_id INT(11) NOT NULL,
          FOREIGN KEY (staff_cv_id) REFERENCES staff_cv(staff_cv_id)
          ON DELETE CASCADE
        )
      `;

      db.query(staff, (err, result) => {
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

  createOneToOneTable();
});
