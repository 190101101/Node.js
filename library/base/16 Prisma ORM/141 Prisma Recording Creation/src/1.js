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

const createPerson = () => {
	prisma.Person.create({
		data:{
			email: 'test5@gmail.com',
			name: 'test5',
			age: 90,
			birth_date: new Date(),
		}
	}).then((r) => {
		console.log(r)
	}).catch((err) => {
		console.log(err);
	})
}

// createPerson();

const createPersons = async() => {
	const createMany = await prisma.person.createMany({
		data: [
			{email: 'bob1@gmail.com', name:'bob1'},
			{email: 'bob1@gmail.com', name:'bob2'},
			{email: 'bob3@gmail.com', name:'bob3'},
		],
		skipDuplicates:true
	}) 
}

createPersons();