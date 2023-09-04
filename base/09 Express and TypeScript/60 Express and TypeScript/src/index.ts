import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());

const router = express.Router();

interface User{
	id:number
	name:string
	surname:string
}

router.get('/', (req:Request, res:Response) => {
	const arr:User[] = [
		{
			id:19,
			name:'kuki',
			surname:'kukis',
		},
		{
			id:13,
			name:'apsi',
			surname:'apsikus',
		},
	];

	res.json(arr).status(200);
})

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
})