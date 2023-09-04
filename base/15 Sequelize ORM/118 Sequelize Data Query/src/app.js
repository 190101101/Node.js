const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const filterDataOp = async () => {
   try{
      const findedData = await TestModel.findAll({
         /*
         where:{
            test_surname: 'cats 7',
         }
         where:{
            [Op.or]: [{test_name: 'cat 6'}, {test_surname: 'cats 7'}]
         }
         where:{
            test_name:{
               [Op.ne]: 'cat 6',
            }
         }
         */
         where:{
            test_name:{
               [Op.startsWith]: 'c',
            }
         }
      }, {logging:true});

      console.log(findedData);
   }catch(error) {
      console.log(error);
   }
}

filterDataOp();