const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const createWithTransaction = async () => {
   const trans = await db.sequelize.transaction();
   try{
      const res = await TestModel.create({
         testName: 'cookie',
         testSurname: 'cookies',
      }, {logging:true});
      
      await trans.commit();

      console.log(res);
   }catch(error) {
      await trans.rollback();
      console.log(error);
   }
}

createWithTransaction();