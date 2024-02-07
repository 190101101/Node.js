const db = require('./db');
const {Op} = require('sequelize');
const Test = require('./models/test-model');
const User = require('./models/user-model');
const Socials = require('./models/social-model');

User.hasMany(Socials, {foreignKey: 'user_id'});
Socials.belongsTo(User);

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();


const createDataWithRelational = async() => {
   const user = await User.create({
      username: 'cookie',
   }, {logging: true});

   const social = await Socials.create({
      socialname:'telegram'
   });

   const userWithSocial = await user.addSocial(social);
   console.log('userWithSocial: ', userWithSocial);
}

createDataWithRelational();