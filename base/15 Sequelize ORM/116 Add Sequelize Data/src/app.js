const db = require('./db');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();

const createData = async () => {
   const TestModel = require('./models/test-model');
   const test = new TestModel({
      testName: 'apsi',
      testSurname: 'mapsi',
   });

   try{
      const res = await test.save({logging:true});
      console.log(res);
   }catch(error) {
      console.log(error);
   }
}

createData();
