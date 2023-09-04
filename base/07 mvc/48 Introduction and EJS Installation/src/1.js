const express = require('express');
const app = express();
const appRouter = require('./router/router');
app.set('view engine', 'ejs');


app.use(appRouter);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});


// http://localhost:3000/bmw/auto/baku?min=1000&max=5000