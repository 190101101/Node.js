const express = require('express');
const db = require('./db');
const {Op} = require('sequelize');
const TestModel = require('./models/test-model');

const app = express();
const router = express.Router();

app.use(express.json());
/////////////////////////

router.post('/create', async (req, res) => {
   const {testName, testSurname} = req.body;
   try{
      const response = await TestModel.create({
         testName,
         testSurname,
      }, {logging:true});

      console.log(response);

      res.json({message: 'created'}).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
      console.log(error);
   }
});

router.get('/read', async (req, res) => {
   try{
      const response = await TestModel.findAll({logging:true});
      console.log(response);

      res.json(response).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
      console.log(error);
   }
});

router.put('/update/:dataId', async (req, res) => {
   const {dataId} = req.params;
   const {testName, testSurname} = req.body;

   try{
      const updated = await TestModel.update(
         {testName, testSurname}, 
         {where: {test_id: dataId}}
      );
      res.json(updated).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
   }
});


router.delete('/delete/:dataId', async (req, res) => {
   const {dataId} = req.params;

   try{
      const findedData = await TestModel.findOne({where: {test_id: dataId}});
      const removeData = await findedData.destroy({logging:true, force:true});
      console.log('removeData:', removeData);

      res.json(removeData).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
      console.log(error);
   }
});


router.post('/multiple', async (req, res) => {
   const {data} = req.body;
   try{
      const response = TestModel.bulkCreate(data);
      res.json(response).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
   }
});

router.post('/findOrCreate', async (req, res) => {
   const {testModel} = req.body;

   try{
      const [data, isCreated] = await TestModel.findOrCreate({
         where: {
            testName: testModel.testName
         },
         defaults: testModel
      });


      if(isCreated){
         res.json({isExist:false, ...data}).status(200);
         return;
      }

      res.json({isExist:true, ...data}).status(200);
   }catch(err){
      res.json({message: 'oops'}).status(500);
   }
});


router.get('/getById/:dataId', async (req, res) => {
      const {dataId} = req.params;
   try{
      const response = await TestModel.findByPk(dataId);
      res.json(response).status(200);
   }catch(err){
      res.json({message: 'oops'}).status(500);
   }
});

router.get('/page', async (req, res) => {
      const {limit, offset} = req.query;
   try{
      const response = await TestModel.findAndCountAll({
         limit: Number(limit),
         loggin: true,
         offset: Number(offset)
      });

      res.json(response).status(200);

      response.rows.forEach((item) => {
         console.log('item', Json.stringify(item.dataValues));
      })

   }catch(err){
      res.json({message: 'oops'}).status(500);
   }
});

router.get('/query/:dataId', async (req, res) => {
   const {dataId} = req.params;
   try{
      const response = await db.sequelize.query("SELECT * FROM test WHERE test_id=:id", {
         replacements:{
            id: dataId
         },
         loggin:console.log,
         type: db.sequelize.QueryTypes.SELECT
      });
      
      res.json(response).status(200);

   }catch(err){
      res.json({message: 'oops'}).status(500);
   }
})

router.get('/filter', async (req, res) => {
   try{
      const response = await TestModel.findAll({
         where:{
            testName: {
               [Op.startsWith]: 'd',
            }
         }
      }, {logging:true});
      
      res.json(response).status(200);
   }catch(error) {
      res.json({message: 'oops'}).status(500);
   }
});


router.post('/transaction', async (req, res) => {

   const trans = await db.sequelize.transaction();
   try{
      const response = await TestModel.create({
         testName: 'cookie transaction',
         testSurname: 'cookies transaction',
      }, {logging:true});
      
      await trans.commit();

      res.json(response).status(200);
   }catch(error) {
      await trans.rollback();
      res.json({message: 'oops'}).status(500);
   }
});



/////////////////////////
app.use(router);

app.listen(3000, async () => {
   console.log('http://localhost:3000');
   // await db.connect();
   // db.createTables();
});


/*

{
   "testName":"cookie updated",
   "testSurname":"cookie the cat updated"
}

*/

/*
{
   "data":[
      {
         "testName":"cookie",
         "testSurname":"cookie the cat"
      },
      {
         "testName":"apsi",
         "testSurname":"apsi the cat"
      },
   ]
}

*/

/*
{
   "testModel": {
      "testName":"dally",
      "testSurname":"dally the dog"
   }
}

*/
