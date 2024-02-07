const db = require('./db');

const connectToDb = async () => {
   await db.connect();
   db.createTables();
   console.log('done');
}
connectToDb();
