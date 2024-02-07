const path = require('path');

console.log(path);
console.log("ext:" , path.extname('C:/Users/190101101/Desktop/Node.js/node/src/index.js'));
console.log("base:", path.basename('C:/Users/190101101/Desktop/Node.js/node/src/index.js'));
console.log("dir:", path.dirname('C:/Users/190101101/Desktop/Node.js/node/src/index.js'));

const pathFormat = path.format({
	root: '/test/zxc/',
	name: 'file',
	ext: '.txt',
})

console.log("format:", pathFormat);

console.log("join:", path.join('/zxc', 'test', 'asd/qwe', 'dfg'));

console.log("parse:", path.parse('C:/Users/190101101/Desktop/Node.js/node/src/index.js'));

console.log("resolve:", path.resolve('/a', 'b', 'c'));
console.log("resolve:", path.resolve('/a', '/b', 'c'));
console.log("resolve:", path.resolve('/a', '/b', '/c'));
