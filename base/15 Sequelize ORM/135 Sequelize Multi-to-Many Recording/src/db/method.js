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

const test = async() => {
   const actor = await Actor.create({actorname: 'Brad Pitt'});
   const movie = await Movie.create({moviename: 'fight club'});

   const result = await actor.addMovie(movie);
   console.log(result);
}

const test2 = async() => {
   const actor = await Actor.create({actorname: 'Daniel Radcliff'});
   const movie = await Movie.create({moviename: 'Harry Potter'});

   const result = await movie.addActor(actor);
   console.log(result);
}

const test3 = async() => {
   const actor = await Actor.findByPk(3);
   
   const movie1 = await Movie.create({moviename: 'zxc 1'});
   const movie2 = await Movie.create({moviename: 'zxc 2'});
   const result = await actor.addMovies([movie1, movie2]);

   console.log(result);
}


const test4 = async() => {
   const movie = await Movie.findByPk(1);

   const actor1 = await Actor.create({actorname: 'john'});
   const actor2 = await Actor.create({actorname: 'hack'});
   const actor3 = await Actor.create({actorname: 'jonny'});

   const result = await movie.addActors([actor1, actor2, actor3]);

   console.log(result);
}

test4();