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
	let data = [];

	for(let i = 0; i < 30; i++){
		const age = Number(Math.floor(Math.random()*10) + 1);
		data.push({
			email:`bob${i}@gmail.com`,
			name:`bob${i}`,
			age:age,
		});
	}

	const createMany = await prisma.person.createMany({data,skipDuplicates:true})
}

createPersons();



//
const res = await prisma.person.groupBy({by: ['name']});
const res = await prisma.person.aggregate({_avg: {'age':true}});

const res = await prisma.person.findFirst({
	where:{
		id:{
			equals: 11
		}
	}
});

const res = await prisma.person.findMany();

const res = await prisma.person.findMany({
	select: {
		id:true,
		name:true,
		age:true,
	}
});

const res = await prisma.person.findMany({
	where:{
		OR:[{
			name: {
				notIn:['bob']
			},
			email:{
				in:['test@gmail.com']
			}
		}]
	},
	select: {
		id:true,
		email:true,
		name:true,
	}
});

const res = await prisma.person.update({
	where:{
		id: 1
	},
	data: {
		name: 'test1'
	}
});


const res = await prisma.person.updateMany({
	where: {
		email: {
			contains: 'test'
		}
	},
	data: {
		age: 2
	}
});

const res = await prisma.person.updateMany({
	where: {
		email: {
			contains: 'test'
		}
	},
	data: {
		age: 2
	}
});

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
}

const deletePerson = async () => {
	try{
		const res = await prisma.person.delete({
			where:{
				id:29
			}
		});

		const res = await prisma.person.deleteMany({
			where:{
				email:{
					contains: 'prisma'
				}
			}
		});

		const res = await prisma.person.deleteMany({});

		console.log(res);

	}catch (error){
		console.log(error);
	}
}

deletePerson();



