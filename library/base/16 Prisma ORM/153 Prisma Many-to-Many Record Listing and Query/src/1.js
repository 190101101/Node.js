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
	const res = await prisma.post.findMany({
		include:{
			categories:{
				where:{
					categoryId:3
				},
				include:{
					post:true,
					category:true
				}
			}
		}
	});
	console.log(res[1].categories);
}

test();