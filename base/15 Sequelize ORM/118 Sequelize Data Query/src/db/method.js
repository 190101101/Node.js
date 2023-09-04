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
