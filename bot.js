require('dotenv').config();
require('./lib/utils/connect')();

const Tweet = require('./lib/models/Tweet');
const twit = require('twit'); 

const T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}); 

// get the quote from the api address and assign it to a variable(object)

const fetchedQuote = () => { 
  return Tweet
    .aggregate([
      {
        '$sample': {
          'size': 1
        }
      }
    ])
    .then(([tweet]) => tweet);
};
const sendTweet = status =>  T.post('statuses/update', { status }); 

const sendRandomTweet = () => {
 
  return fetchedQuote()
    .then(({ quote, author }) => sendTweet(`${quote} - ${author}`))
    .then(() => console.log(`tweet sent`))
    .catch((err) => console.log(`could not post tweet`, err));
  
};
sendRandomTweet();

//TECH DEBT:
// setInterval(sendRandomTweet, 1000*60);
// ^^ to implement timer on our tweets
// ensure the tweet being randomly selected is shorter than the character limit for tweets 
// bad words npm: marriage, husband, wife, dead, names?
// are there npm packages filtering out BAD PEOPLE? we might be able to filter this by populating the model with the authors we want quotes from 

module.exports = {
  fetchedQuote
};



