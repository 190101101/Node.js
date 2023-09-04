prisma.$on('query', async(e) => {
	console.log('query: ', e.query);
	console.log('params: ', e.params);
	console.log('duration: ', e.duration + 'ms');
});

const disconnectToDb = async () => {
	try{
		await prisma.$disconnect();
		console.log('disconnect');
	}catch(err)
	{
		console.log('error:', err);
	}
}

prisma.$on('beforeExit', async() => {
	console.log('before exit hook');
});

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

createPerson();

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