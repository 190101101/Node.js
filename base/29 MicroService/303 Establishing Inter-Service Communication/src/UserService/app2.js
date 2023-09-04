
const express = require('express');
const {createClient} = require('redis');
const NRP = require('node-redis-pubsub');
const app = express();
const router = express.Router();
const client = createClient();

const connectRedis = async() => {
  await client.connect();
}

app.use(express.json());

const nrp = new NRP({port: 6379, scope: 'user'});

router.get('/', (req, res) => {
  /*
  client.del('user').then((r) => {});

  client.get('user').then((r) => {
    console.log(r);
  });
  res.send('ok');
  */

  client.get('user').then((r) => {
    if(r){
      res.send(r);
    }
    else{
      client.set('user', JSON.stringify({name: 'apsi'}))
        .then((r) => {
          console.log(r)
          res.send(r);
          nrp.emit("created", r);
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


