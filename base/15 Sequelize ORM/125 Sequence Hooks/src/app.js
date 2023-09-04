const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const createDataValidate = async () => {
   try{
      const test = await TestModel.create({
         testName: 'cookie',
         testSurname: 'cookies@mail.ru',
      }, {logging:true, validate:true});

      console.log('test:', test);

   }catch(error) {
      console.log(error.errors[0].message);
   }
}

createDataValidate();