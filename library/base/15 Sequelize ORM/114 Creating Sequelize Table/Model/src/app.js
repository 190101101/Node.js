const db = require('./db');

const connectToDb = async () => {
   db.connect();
   db.createTables();
}
connectToDb();
