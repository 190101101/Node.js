const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const createData = async () => {
   try{
      const res = await TestModel.create({
         testName: 'cookie',
         testSurname: 'cookies',
      }, {logging:true});

      console.log('res', res.testFullName);
   }catch(error) {
      console.log(error);
   }
}

createData();