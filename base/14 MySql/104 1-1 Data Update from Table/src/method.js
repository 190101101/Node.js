const createDb = () => {
  db.query(`CREATE DATABASE node`, (err, result) => {
    if(err){
      console.log('err', err);
    }

    console.log('result', result);
  });
}

const createTable = () => {
  db.query(`CREATE TABLE IF NOT EXISTS users (
      user_id INT(11) AUTO_INCREMENT,
      user_name VARCHAR(100),
      user_status INT(11),
      PRIMARY KEY (user_id)
    )`, (err, result) => {
      if(err){
        console.log(err);
      }
      console.log('result:', result);
  });
}

const createRecord = () => {
  const query = `INSERT INTO users (user_name) VALUES ('cookies')`;
  db.query(query, (err, result) => {
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

const createDynamicRecord = () => {
  const query = `INSERT INTO users (user_name, user_status) VALUES (?, ?)`;

  const user_name = ps.argv[2];
  const user_status = ps.argv[3];

  db.query(query, [user_name, user_status], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const selectMyData = () => {
  const query = `SELECT * FROM users`;

  db.query(query, (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const findById = (id) => {
  const query = `SELECT * FROM users WHERE user_id=?`;

  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const findByName = (name) => {
  const query = `SELECT * FROM users WHERE user_name=?`;

  db.query(query, [name], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const findByNameWithId = (name, id) => {
  const query = `SELECT * FROM users WHERE user_name=? && user_id=?`;

  db.query(query, [name, id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const findByNameOrId = (name, id) => {
  const query = `SELECT * FROM users WHERE user_name=? or user_id=?`;

  db.query(query, [name, id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const deleteById = (id) => {
  const query = `DELETE FROM users WHERE user_id=?`;

  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const deleteByName = (name) => {
  const query = `DELETE FROM users WHERE user_name=?`;

  db.query(query, [name], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}

const updateNameById = (name, id) => {
  const query = `UPDATE users SET user_name=? WHERE user_id=?`;

  db.query(query, [name, id], (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);
  });
}


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
          ON DELETE CASCADE
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

const getAllRelationsData = () => {
  const query = `
    SELECT * FROM persons 
    INNER JOIN social_network ON 
    persons.person_id = social_network.person_id
  `;

  db.query(query, (err, result) => {
    if(err){
      console.log(err);
    }

    console.log(result);
  });
}

const getAllRelationsById = (id) => {
  const query = `
    SELECT 
      persons.person_name,
      social_network.social_media_name, 
      social_network.social_media_id 
    FROM persons 
    INNER JOIN social_network ON 
    persons.person_id = social_network.person_id
    WHERE persons.person_id = ?
  `;

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

  /*
  createStaff('cookie', {
    staff_name: 'cookie',
    staff_surname: 'cookies',
    staff_salary: '3000',
  });
  */
}

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
