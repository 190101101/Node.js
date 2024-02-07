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
	prisma.student.findMany({
		include: {
			_count:true,
			lessons:{
				select:{
					lesson_name:true,
					id:true
				},
				where:{
					id:1
				}
			}
		}
	}).then((r) => {
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test();