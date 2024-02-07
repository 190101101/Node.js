const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();

const paginationData = async () => {
   try{
      const response = await TestModel.findAndCountAll({
         limit: 3,
         loggin: true,
         offset: 5
      });

      response.rows.forEach(elem => {
         console.log(JSON.stringify(elem));
      })

      // console.log(response);

   }catch(error) {
      console.log(error);
   }
}

paginationData();

