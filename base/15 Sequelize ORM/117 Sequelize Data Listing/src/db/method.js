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

