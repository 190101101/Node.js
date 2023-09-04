const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error']
});

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
