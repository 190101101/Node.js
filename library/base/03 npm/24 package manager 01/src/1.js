const colors = require('ansi-colors');

// console.log(colors);

console.log(colors.red('this is red string'));
console.log(colors.green('this is green string'));
console.log(colors.cyan('this is cyan string'));
console.log(colors.yellow('this is yellow string'));

console.log('--------');

console.log(colors.bold.red('this is red string'));
console.log(colors.bgWhite.bold.red('this is red string'));
console.log(colors.underline.bgBlue.red('this is red string'));
