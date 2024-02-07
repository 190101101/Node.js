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
      const test = await TestModel.create({
         testName: 'cookie',
         testSurname: 'cookies@mail.ru',
      });

      test.validate().then((value) => {
         console.log('no problem');
      }).catch((err) => {
         console.log(err);
      });

   }catch(error) {
      console.log(error.errors[0].message);
   }
}

createData();