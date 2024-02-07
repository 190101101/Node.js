const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const filterData = async () => {
   try{
      const findedData = await TestModel.findByPk(5);
      const findedData = await TestModel.findOne({where: {test_id: 7}});
      console.log(findedData);

   }catch(error) {
      console.log(error);
   }
}

filterData();

const deleteData = async () => {
   try{
      const findedData = await TestModel.findOne({where: {test_id: 7}});
      const removeData = await findedData.destroy({logging: true, force: true});
      console.log(removeData);
   }catch(error) {
      console.log(error);
   }
}
