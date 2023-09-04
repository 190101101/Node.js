require('dotenv').config({
  debug: true,
  override: true
});

const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const client = new MongoClient(process.env.DB_URI);

let mydb;

const main = async () => {
  await client.connect();
  console.log('connect');
}

main();

module.exports = client;
