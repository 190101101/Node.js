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

const test5 = async() => {
   const actor = await Actor.findByPk(3);
   const result = await actor.getMovies();
   console.log(result);
}

const test6 = async() => {
   const movie = await Movie.findByPk(1);
   const result = await movie.getActors();
   console.log(result);
}

const test7 = async() => {
   const actor = await Actor.findByPk(3);
   const movie = await actor.createMovie({moviename: 'Harry Potter 2'})
   console.log(movie);
}

const test8 = async() => {
   const actor = await Actor.findByPk(3);
   const count = await actor.countMovies();
   console.log(count);
}

const test9 = async() => {
   const actor = await Actor.findByPk(3);
   const movie = await Movie.findByPk(3);

   const result = await actor.removeMovie(movie);
   console.log(result);
}

const test10 = async() => {
   const actor = await Actor.findByPk(3);
   const movie1 = await actor.createMovie({moviename: 'Harry Potter 1'})
   const movie2 = await actor.createMovie({moviename: 'Harry Potter 2'})
   const movie3 = await actor.createMovie({moviename: 'Harry Potter 3'})
   const movie4 = await actor.createMovie({moviename: 'Harry Potter 4'})
   const movie5 = await actor.createMovie({moviename: 'Harry Potter 5'})
   const movie6 = await actor.createMovie({moviename: 'Harry Potter 6'})
   const movie7 = await actor.createMovie({moviename: 'Harry Potter 7'})
   const movie8 = await actor.createMovie({moviename: 'Harry Potter 8'})

   const result = await actor.addMovies([
         movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8
   ]);
   console.log(result);
}


const test11 = async() => {
   const actor = await Actor.findByPk(3);
   const movie1 = await Movie.findByPk(10);
   const movie2 = await Movie.findByPk(11);
   const movie3 = await Movie.findByPk(12);


   const result = await actor.removeMovies([movie1, movie2, movie3]);
   console.log(result);
}


const test12 = async() => {
   const data = await Actor.findAll({
      where: {
         id: 3
      },
      include: [{
         model: Movie,
         through: {attributes: []},
         where_name:{
            [Op.eq]: ['Harry Potter']
         }
      }]
   });
   
   console.log(JSON.stringify(data));
}
