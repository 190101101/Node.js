const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error']
});

const connectToDb = async () => {
	try{
		await prisma.$connect();
		console.log('connect');
	}catch(err){
		console.log('error:', err);
	}
}

connectToDb();

const test = async () => {
	prisma.person.findMany({
		skip: 2,
		take:5
	})
	.then((s) => {
		console.log(s);
	}).catch((e) => {
		console.log(e);
	})
}

test();