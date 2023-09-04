const express = require('express');
const configs = require('./configs/index');

configs.serverConfig.initialServerConfig();
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

/*
router.get('/', (req, res) => {
	res.json({message:'server work'}).status(200);
});
*/

console.log(process.env);

app.use(express.json());
app.use(router);
app.listen(3000, () => {
	console.log(`http://localhost:${PORT}`);
})