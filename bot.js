require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const { sendRandomTweet } = require('./lib/utils/fetchedQuote');

sendRandomTweet()
  .then(() => console.log(`tweet sent`))
  .catch((err) => console.log(`could not post tweet`, err))
  .finally(() => mongoose.connection.close());

  

//TECH DEBT:
// setInterval(sendRandomTweet, 1000*60);
// ^^ to implement timer on our tweets
// ensure the tweet being randomly selected is shorter than the character limit for tweets 
// bad words npm: marriage, husband, wife, dead, names?
// are there npm packages filtering out BAD PEOPLE? we might be able to filter this by populating the model with the authors we want quotes from 




