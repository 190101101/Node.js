const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mongoUdemyCourse'
 
async function main() {
    await client.connect();
    console.log('Connect successful to server');
}
 
main()
 
const collection = client.db(dbName).collection('Authors');
 
module.exports = { collection }

router.get('/listAuthorWithSortByName', async (req, res) => {
    const x = await db.collection.find({}).sort({ name: Number(req.query.order) }).toArray()
    res.status(200).json(x)
})