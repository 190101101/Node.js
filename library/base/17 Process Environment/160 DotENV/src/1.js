require('dotenv').config({
	debug:true,
	override:true
})

console.log(process.env);
console.log(process.env.APP_PORT);
console.log(process.env.APP_SECRET_KEY);
console.log(process.env.MY_DB);