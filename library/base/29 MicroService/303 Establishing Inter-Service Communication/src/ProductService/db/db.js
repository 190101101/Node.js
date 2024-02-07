const mongoose = require('mongoose');

exports.connectMongoDB = async () => {
    try{
      await mongoose.connect('mongodb+srv://HdivLLtP2S0hy2mv:dMT85n2J90YufqZp@node.468w3f9.mongodb.net/mydb?retryWrites=true&w=majority', {
        minPoolSize:20,
        maxPoolSize:40,
        autoIndex:true,
        compressors: 'zlib',
        connectTimeoutMS: 5000
      });
      console.log('connect');
    }catch(error){
        throw new Error(error);
    }
}

