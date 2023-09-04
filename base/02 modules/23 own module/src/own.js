const own = {
	add(p1, p2){
		return p1 + p2;
	},
	logToConsole(text){
		console.log('console:', text);
	}
}

const myName = 'cookie';

const getDate = () => {
	return new Date();
}


module.exports = {
	own,
	myName,
	getDate
};