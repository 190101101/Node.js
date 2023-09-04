const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const updateData = async () => {
   try{
      const updated = await TestModel.update({testName: 'update cat 3'}, {where: {test_id: 3}});
      console.log(updated);
   }catch(error) {
      console.log(error);
   }
}

updateData();