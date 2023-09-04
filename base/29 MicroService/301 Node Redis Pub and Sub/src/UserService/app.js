const express = require('express');
const {createClient} = require('redis');

const app = express();
const router = express.Router();
const client = createClient();

const connectRedis = async() => {
  await client.connect();
}

app.use(express.json());

router.get('/', (req, res) => {

  client.get('soap').then((r) => {
    console.log(r);
  })

  client.set('soap', 'any soap').then((r) => {
    console.log(r)
    res.send(r);
  }).catch((err) => {
    console.log(err)
    res.send(err);
  })
})

app.use(router);

connectRedis().then(() => {
  app.listen(3301, () => {
    console.log('http://localhost:3301');
  })
});


