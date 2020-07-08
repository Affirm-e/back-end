const Tweet = require('../models/Tweet');
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
    .then(({ quote, author }) => sendTweet(`${quote} - ${author}`));
  
};

module.exports = {
  fetchedQuote,
  sendRandomTweet
};
  
