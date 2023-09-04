const createData = async () => {
   try{
      const res = await TestModel.create({
         testName: 'cookie',
         testSurname: 'cookies',
      }, {logging:true});

      console.log(res);
   }catch(error) {
      console.log(error);
   }
}


const createManyData = async () => {
   try{
      for(let i = 1; i < 30; i++){
      await TestModel.create({
         testName: `cat ${i}`,
         testSurname: `cats ${i}`,
      }, {logging:true});
      }
   }catch(error) {
      console.log(error);
   }
}

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


const filterData = async () => {
   try{
      const findedData = await TestModel.findAll({
         where:{
            test_surname: 'cats 7',
         }
      }, {logging:true});

      console.log(findedData);
   }catch(error) {
      console.log(error);
   }
}

const filterDataOp = async () => {
   try{
      const findedData = await TestModel.findAll({
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

const updateData = async () => {
   try{
      const updated = await TestModel.update({testName: 'update cat 3'}, {where: {test_id: 3}});
      console.log(updated);
   }catch(error) {
      console.log(error);
   }
}

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


const findOrCreate = async () => {
   try{
      const [data, isCreated] = await TestModel.findOrCreate({
         where: {
            testName: 'cat 10'
         },
         defaults:{
            testName: 'cat 10',
            testSurname: 'cats 10',
            version: 3
         }
      });

      console.log('data:', data);

      if(isCreated){
         console.log('created:', data);
      }
   }catch(error) {
      console.log(error);
   }
}


const paginationData = async () => {
   try{
      const response = await TestModel.findAndCountAll({
         limit: 3,
         loggin: true,
         offset: 5
      });

      response.rows.forEach(elem => {
         console.log(JSON.stringify(elem));
      })

      // console.log(response);

   }catch(error) {
      console.log(error);
   }
}

const createDataValidate = async () => {
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

const getQueryWithSequelize = async () => {
   try{
      const res = await db.sequelize.query("SELECT * FROM test WHERE test_id = :id", {
         replacements: {
            id:1
         },
         logging: console.log,
         type: db.sequelize.QueryTypes.SELECT
      });

      console.log(res);

   }catch(error) {
      console.log(error);
   }
}