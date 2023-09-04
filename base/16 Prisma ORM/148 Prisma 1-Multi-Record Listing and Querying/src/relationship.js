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