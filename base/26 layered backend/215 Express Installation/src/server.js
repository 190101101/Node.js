const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

router.get('/', (req, res) => {
	res.json({message:'server work'}).status(200);
});

app.use(express.json());
app.use(router);
app.listen(3000, () => {
	console.log(`http://localhost:${PORT}`);
})