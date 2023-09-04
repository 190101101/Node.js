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

  client.get('user').then((r) => {
    if(r){
      res.send(r);
    }
    else{
      client.set('user', JSON.stringify({name: Math.random() + ' soap'}))
        .then((r) => {
          console.log(r)
          res.send(r);
        }).catch((err) => {
          console.log(err)
          res.send(err);
        })    
    }
  });

  
})

app.use(router);

connectRedis().then(() => {
  app.listen(3301, () => {
    console.log('User Service http://localhost:3301');
  })
});


