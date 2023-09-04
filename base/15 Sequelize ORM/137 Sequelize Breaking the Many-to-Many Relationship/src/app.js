const db = require('./db');
const {Op} = require('sequelize');
const Test = require('./models/test-model');
const User = require('./models/user-model');
const Socials = require('./models/social-model');
const Actor = require('./models/actor-model');
const ActorMovie = require('./models/actor-movie-model');
const Movie = require('./models/movie-model');

Actor.belongsToMany(Movie, {through: ActorMovie, foreignKey: 'actor_id'});
Movie.belongsToMany(Actor, {through: ActorMovie, foreignKey: 'movie_id'});

User.hasMany(Socials, {foreignKey: 'user_id'});
Socials.belongsTo(User);

const connectToDb = async () => {
   await db.connect();
   // db.createTables();
   console.log('done');
}

connectToDb();

const test11 = async() => {
   const actor = await Actor.findByPk(3);
   const movie1 = await Movie.findByPk(10);
   const movie2 = await Movie.findByPk(11);
   const movie3 = await Movie.findByPk(12);


   const result = await actor.removeMovies([movie1, movie2, movie3]);
   console.log(result);
}

