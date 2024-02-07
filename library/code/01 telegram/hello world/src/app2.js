const {Telegraf} = require('telegraf');

// kikusi_bot
// 6308239615:AAHE0FIKZYkj4w5xZvg0bQlcCw3_cF0LwLY
const token = '6308239615:AAHE0FIKZYkj4w5xZvg0bQlcCw3_cF0LwLY';
const bot = new Telegraf(token);

bot.start((ctx) => {
	console.log(ctx);
	ctx.reply('welcome :)');
});

bot.help((ctx) => {
	ctx.reply();
})

bot.command('hello', (ctx) => {
	ctx.reply('hello i am kikusi');
})

bot.command('image', (ctx) => {
	ctx.reply('image');
})

bot.launch();