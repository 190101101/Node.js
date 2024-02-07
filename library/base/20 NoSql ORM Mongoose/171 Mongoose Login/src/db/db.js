const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({
  debug: true,
  override: true,
});

mongoose.connect(process.env.DB_URI);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'cookie' });
kitty.save().then(() => console.log('meow'));


