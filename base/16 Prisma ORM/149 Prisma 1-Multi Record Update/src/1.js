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
	prisma.student.update({
		where:{
			id: 1
		},
		data: {
			lessons:{
				update:{
					where:{
						id:1
					},
					data:{
						lesson_name: 'nestjs',
					}
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