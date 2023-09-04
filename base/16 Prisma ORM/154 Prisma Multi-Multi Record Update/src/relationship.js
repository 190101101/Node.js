const test = () => {
	prisma.student.create({
		data:{
			last_name:'apsi',
			name:'apsikus',
			lessons:{
				create:[
					{lesson_name: 'nodejs'},
					{lesson_name: 'nestjs'},
				]
			}
		}
	}).then((r) => {
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test();

///

const test2 = () => {
	prisma.student.create({
		data:{
			last_name:'pepikus',
			name:'pepi',
			
		}
	}).then((r) => {
		prisma.lesson.create({
			data:{
				lesson_name:'nodejs',
				student_id:r.id
			}
		}).then((l) => {
			console.log(l);
		}).catch((e) => {
			console.log(e);
		});
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test2();

///
const test3 = () => {
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

test3();


const test4 = () => {
	prisma.student.findMany({
		include: {
			_count:true,
			lessons:true
		}
	}).then((r) => {
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test4();

const test5 = () => {
	prisma.student.findMany({
		include: {
			_count:true,
			lessons:{
				include: {
					student:true
				}
			}
		}
	}).then((r) => {
		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test5();

//
const test6 = () => {
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

test6();


//relations update
const test7 = () => {
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

test7();

//
const test8 = () => {
	prisma.student.findFirst({
		where:{
			id:1
		}
	}).then((r) => {
		prisma.lesson.deleteMany({
			where:{
				student_id: r.id
			}
		}).then((l) => {
			console.log(l);
		}).catch((err) => {
			console.log(err);
		});

		console.log(r);
	}).catch((err) => {
		console.log(err);
	});
}

test8();

//many to many
const test9 = async () => {
	const res = await prisma.post.create({
		data:{
			title: 'post 1',
			categories:{
				create:[
					{
						assignedAt:new Date(),
						category:{
							create:{
								name:'category 1'
							}
						}
					}
				]
			}
		}
	});
	console.log(res);
}

test9();

// 
const test10 = async () => {
	const res = await prisma.post.create({
		data:{
			title: 'post 1',
			categories:{
				create:[
					{
						assignedAt:new Date(),
						category:{
							create:{
								name:'test 1'
							}
						}
					},
					{
						assignedAt:new Date(),
						category:{
							create:{
								name:'test 2'
							}
						}	
					}
				]
			}
		}
	});
	console.log(res);
}

test10();

//

const test11 = async () => {
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

test11();

//
const test12 = async () => {
	const res = await prisma.categoriesOnPosts.findMany({
		include:{
			category:true,
			post:true
		}
	});
	console.log(res);
}

test12();


//
const test13 = async () => {
	const res = await prisma.post.findMany({
		include:{
			categories:{
				include:{
					category:true
				}
			}
		}
	});
	console.log(res[1].categories);
}

test13();

//
const test14 = async () => {
	const res = await prisma.post.findMany({
		include:{
			categories:{
				include:{
					post:true,
					category:true
				}
			}
		}
	});
	console.log(res[1].categories);
}

test14();

//
const test15 = async () => {
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

test15();

//something wrong
const test16 = async () => {
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

test16();