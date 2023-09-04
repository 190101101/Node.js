const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const token = '6308239615:AAHE0FIKZYkj4w5xZvg0bQlcCw3_cF0LwLY';
const bot = new Telegraf(token);

bot.on(message('text'), async (ctx) => {
  let answer = '';

  if(ctx.message.text == 'hello'){
    answer = `hello to ${ctx.message.chat.username}`;
  }

  if(ctx.message.text == 'have are you'){
    answer = `thank you and you?`;
  }

  if(ctx.message.text == 'me to. do you love cat?'){
    answer = `yes i love cat`;
  }

  await ctx.reply(answer);
});


bot.launch();