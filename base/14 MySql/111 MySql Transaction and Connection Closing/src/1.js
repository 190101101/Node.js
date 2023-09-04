const db = require('./db');
const ps = require('process');


const createWithTransaction = (name) => {
    db.beginTransaction();
   
    const initialTrans = false;

    const query = `INSERT INTO users (user_name) VALUES (?)`;
    db.query(query, [name], (err, result) => {
        if(err){
          console.log(err);
        }
        console.log(result);

        if(initialTrans == true){
            db.rollback();
        }
        else{
            db.commit();
        }

        db.end();
    });
}


db.connect((err) => {
    if(err){
        console.log('error', err);
    }

    createWithTransaction('apsi');
});
