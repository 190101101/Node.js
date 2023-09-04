const express = require('express')
const app = express()
const router = express.Router();

router.get('/', function (req, res) {
  res.send('user service');
})

app.use(router);

app.listen(3300, () => {
  console.log('http://localhost:3300');
})