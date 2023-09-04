const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error']
});

const connectToDb = async () => {
	try{
		await prisma.$connect();
		console.log('connect');
	}catch(err)
	{
		console.log('error:', err);
	}
}

const disconnectToDb = async () => {
	try{
		await prisma.$disconnect();
		console.log('disconnect');
	}catch(err)
	{
		console.log('error:', err);
	}
}

/*
prisma.$on('beforeExit', async() => {
	console.log('before exit hook');
});
*/

prisma.$on('query', async(e) => {
	console.log('query: ', e.query);
	console.log('params: ', e.params);
	console.log('duration: ', e.duration + 'ms');
});

connectToDb();