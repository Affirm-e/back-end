require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const seed = require('./lib/utils/seedData');
seed()
  .then(() => console.log('Database seeded.'))
  .catch(err => console.error(`Error: ${err}`))
  .finally(() => mongoose.connection.close());
