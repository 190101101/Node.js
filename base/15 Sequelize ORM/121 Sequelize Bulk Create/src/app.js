const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();

const createMultiple = async () => {
   try{
      const response = TestModel.bulkCreate([
         {testName: `cat 1`, testSurname: `cats 1`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 2`, testSurname: `cats 2`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 3`, testSurname: `cats 3`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 4`, testSurname: `cats 4`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 5`, testSurname: `cats 5`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 6`, testSurname: `cats 6`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 7`, testSurname: `cats 7`, version: Math.floor(Math.random() * 10) + 1},
         {testName: `cat 8`, testSurname: `cats 8`, version: Math.floor(Math.random() * 10) + 1},
      ]);

      console.log(response);
   }catch(error) {
      console.log(error);
   }
}

createMultiple();

