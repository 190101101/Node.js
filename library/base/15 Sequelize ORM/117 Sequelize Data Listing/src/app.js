const db = require('./db');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const findAllData = async () => {
   try{
      const res = await TestModel.findAll({
         attributes:['id', 'testName'],
         logging: true
      });
      res.forEach(item => {
         console.log(JSON.stringify(item.dataValues));
      })

   }catch(error) {
      console.log(error);
   }
}

findAllData();