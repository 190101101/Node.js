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
  const values = [['cookie', 1], ['apsi', 1], ['pepi', 1], ['ketty', 1], ];
  const query = `INSERT INTO users (user_name, user_status) VALUES ?`;

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
