const express = require('express')
const app = express()
const router = express.Router();

router.get('/', function (req, res) {
  res.send('micro service');
})

app.use(router);

app.listen(3301, () => {
  console.log('http://localhost:3301');
})