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

// connectToDb();

const test = () => {
	prisma.student.create({
		data:{
			last_name:'kettys',
			name:'ketty',
			lessons:{
				create:[
					{lesson_name: 'reactjs'},
					{lesson_name: 'nextjs'},
				]
			}
		},
		include:{lessons:true}
	}).then((r) => {
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test();