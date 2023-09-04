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

connectToDb();

const updatePerson = async () => {
	try{
		const res = await prisma.person.upsert({
			where: {
				email: 'bob2@gmail.com'
			},
			update: {
				name: 'bob2'
			},
			create:{
				email: 'bob2@gmail.com',
				name: 'bob2',
				age: 3,
				birth_date: new Date(),
			}
		});

		console.log(res);

	}catch (error){
		console.log(error);
	}

	// const res = await prisma.person.findMany();

}

updatePerson();

