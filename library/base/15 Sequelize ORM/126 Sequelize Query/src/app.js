const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const getQueryWithSequelize = async () => {
   try{
      const res = await db.sequelize.query("SELECT * FROM test WHERE test_id = :id", {
         replacements: {
            id:1
         },
         logging: console.log,
         type: db.sequelize.QueryTypes.SELECT
      });

      console.log(res);

   }catch(error) {
      console.log(error);
   }
}

getQueryWithSequelize();