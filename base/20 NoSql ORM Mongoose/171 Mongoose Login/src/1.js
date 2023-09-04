const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({
  debug: true,
  override: true,
  path: 'db/.env'
});

mongoose.connect(process.env.DB_URI);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'cookie2' });
kitty.save().then(() => console.log('meow'));


