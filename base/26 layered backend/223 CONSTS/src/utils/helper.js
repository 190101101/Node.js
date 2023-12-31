const jwt = require('jsonwebtoken');

const createToken = () => {
	const token = jwt.sign({
		userId:'',
		fullName: '',
		email: ''
	}, process.env.SECRET_KEY, {
		issuer:'localhost',
		expiresIn: process.env.EXPIRESIN
	});
	return token;
}

const verifyToken = (token) => {
	const isVerify = {decodedToken:null};

	try{
		const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
		isVerify.decodedToken = decodedToken;
	}catch(error){
		isVerify.decodedToken = null;
		console.log(error);
	}
	return isVerify;
}

module.exports = {
	createToken,
	verifyToken
}