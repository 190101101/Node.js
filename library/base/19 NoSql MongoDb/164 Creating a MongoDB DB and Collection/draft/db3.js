require('dotenv').config({
  debug: true,
  override: true
});

const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const client = new MongoClient(process.env.DB_URI);

async function main() {
    await client.connect();
}

main()

const collection = client.db('mydb').collection('users');
// module.exports = { collection }

const x = collection.find({});

console.log(x);
