const express = require('express');
const app = express();
const router = require('./router/router');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
	console.log('http://localhost:3000');
});
