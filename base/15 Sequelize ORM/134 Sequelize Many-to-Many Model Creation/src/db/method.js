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

const createWithRelational = async() => {
   const user = await User.create({
      username: 'apsi',
   }, {logging: true});

   const data = await user.createSocial({socialname: 'instagram'});
   console.log(data);
}

const findAndCreateWithRelational = async(id) => {
   const user = await User.findByPk(id);
   const data = await user.createSocial({socialname: 'facebook'});
   console.log(data);
}

const getData = async(id) => {
   const user = await User.findByPk(id);
   const data = await user.getSocials();
   const count = await user.countSocials();
   console.log('count:', count);
   console.log(JSON.stringify(data));
}


const multipleCreate = async(id) => {
   const user = await User.findByPk(id);
   const social1 = await user.createSocial({socialname: 'facebook'});
   const social2 = await user.createSocial({socialname: 'whatsapp'});
   const data = await user.addSocials(social1, social2);
   console.log(data);
}

const removeById = async(id) => {
   const socialMedia = await Socials.findByPk(id);
   const user = await User.findByPk(id);
   user.removeSocial(socialMedia);
}

const multipleRemove = async() => {
   const media1 = await Socials.findByPk(5);
   const media2 = await Socials.findByPk(6);
   const user = await User.findByPk(3);

   const remove = await user.removeSocials([media1, media2]);
   console.log(remove);
}

const getUserWithSocials = async() => {
   const data = await User.findAll({
      where: {
         id: 3
      },
      include: [{
         model:Socials,
         attributes:['socialname', 'id'],
         where:{
            socialname: {
               [Op.in]: ['telegram']
            }
         },

      }]
   });

   console.log(JSON.stringify(data));
}

getUserWithSocials();