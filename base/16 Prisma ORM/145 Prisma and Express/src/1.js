const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const router = express.Router();

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error']
});

const PORT = process.env.PORT || 3000;

router.get('/user/list', async (req, res) => {
	try{
		const r = await prisma.person.findMany({});
		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/user/id', async (req, res) => {
	try{
		const r = await prisma.person.findFirst({
			where:{
				id: 101
			}
		});
		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/user/group', async (req, res) => {
	try{
		const gb = await prisma.person.groupBy({by:['name']});
		const avg = await prisma.person.aggregate({_avg: {age: true}});

		res.json(avg).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/user/query', async (req, res) => {
	try{
		const r = await prisma.person.findMany({
			where:{
				OR:[{
					name: {
						notIn:['pepi']
					},
					email:{
						in:['bob1@gmail.com']
					}
				}]
			},
			select: {
				id:true,
				email:true,
				name:true,
			}

		});

		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/user/update', async (req, res) => {
	try{
		const r = await prisma.person.update({
			where:{
				id:100
			},
			data:{
				name:'bob updated'
			}
		});
		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/create/users', async (req, res) => {
	try{
		let data = [];

		for(let i = 1; i < 10; i++){
			const age = Number(Math.floor(Math.random()*10) + 1);
			data.push({
				email:`bob${i}@gmail.com`,
				name:`bob${i}`,
				age:age,
			});
		}
		const r = await prisma.person.createMany({data,skipDuplicates:true})

		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/delete/many', async (req, res) => {
	try{
		const r = await prisma.person.deleteMany({})

		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

router.get('/delete/user', async (req, res) => {
	try{
		const r = await prisma.person.deleteMany({
			where: {
				id: 104
			}
		})

		res.json(r).status(200);
	}catch(err){
		res.send({error:'something wrong'}).status(500);
	}
});

app.use(express.json());
app.use(router);

const connectToDb = async () => {
	try{
		await prisma.$connect();
		console.log('connect');
		app.listen(PORT, () => {
			console.log(`http://localhost:${PORT}`);
		});
	}catch(err){
		console.log('error:', err);
	}
}

connectToDb();
