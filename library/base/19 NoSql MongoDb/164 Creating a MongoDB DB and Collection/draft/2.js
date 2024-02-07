const express = require('express');
const dotenv = require('dotenv');
const conn = require('./db');

dotenv.config();

conn();

const app = express();
const router = express.Router();

app.get('/', (req, res) => {
	res.send('server listen');
});

app.use(router);

app.listen(process.env.PORT, () => {})