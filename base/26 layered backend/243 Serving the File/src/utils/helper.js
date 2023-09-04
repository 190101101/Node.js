const os = require('os');
const fs = require('fs');
const dns = require('dns');
const jwt = require('jsonwebtoken');
const logger = require('./logger');

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

const createUploadDir = (str) => {
	if(!fs.existsSync(str)){
		fs.mkdirSync(str, {recursive:true});
	}
}

const hashToPassword = (password) => {
	const md5 = require('md5');
	return md5(password);
}

const getHost = () => {
	return new Promise((resolve) => {
		dns.lookup(os.hostname(), (err, ip) => {
			resolve(`http://${ip}:${process.env.PORT}`);
		})
	});
}

const logToError = (error, req) => {
	logger.error(`
		IP ADDRESS: ${req.ip} - 
		PATH: ${req.path} - 
		BODY: ${JSON.stringify(req.body)} -
		PARAMS: ${JSON.stringify(req.params)} -
		QUERY: ${JSON.stringify(req.query)} -
		ERROR TIME: ${Date.now()} - 
		URL: ${req.url} -
		ERROR MESSAGE: ${error.message} - 
		ERROR CALLSTACK: ${JSON.stringify(error)}
	`);	
}

module.exports = {
	createToken,
	verifyToken,
	hashToPassword,
	logToError,
	createUploadDir,
	getHost,
}