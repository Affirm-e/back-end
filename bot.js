require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const { sendRandomTweet } = require('./lib/utils/fetchedQuote');

sendRandomTweet()
  .then(() => console.log(`tweet sent`))
  .catch((err) => console.log(`could not post tweet`, err))
  .finally(() => mongoose.connection.close());

  




