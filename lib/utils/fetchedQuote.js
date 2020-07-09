const Tweet = require('../models/Tweet');
const twit = require('twit'); 

const T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}); 

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

const sendRandomTweet = async() => {
  const { quote, author }  = await fetchedQuote();
  await sendTweet(`${quote} - ${author}`);
};

module.exports = {
  fetchedQuote,
  sendRandomTweet
};
  
