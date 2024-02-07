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
	const res = await prisma.category.create({
		data:{
			name: 'category 1',
			posts:{
				create:[
					{
						assignedAt: new Date(),
						post:{
							create:{
								title: 'post test 1',
							}
						}
					},
					{
						assignedAt: new Date(),
						post:{
							create:{
								title: 'post test 2',
							}
						}
					},
				]
			}
		}
	});
	console.log(res);
}

test();