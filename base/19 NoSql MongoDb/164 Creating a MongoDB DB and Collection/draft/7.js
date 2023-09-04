const mongodb = require('mongodb');
const { MongoClient } = mongodb;
require('dotenv').config({
  debug: true,
  override: true
});

const connectToDatabase = async() => {
  try {
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    console.log('Connected to the database');

    const db = client.db('mydb');

    db.createCollection('users').then((r) => {
      console.log('r', r);
    });
    
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

connectToDatabase();
