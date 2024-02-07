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
	const res = await prisma.post.update({
		where:{
			id:2
		},
		data:{
			title:'hello',
			categories:{
				update:{
					where:{
						postId_categoryId:{
							categoryId:4,
							postId:2
						}
					},
					data:{
						assignedAt:new Date(),
						categoryId:2
					}
				}
			}
		}
	});
	console.log(res);
}

test();