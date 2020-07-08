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

//post route



// get the quote from the api address and assign it to a variable (object)
const fetchedQuote = () => { 
  return Tweet
    .aggregate([
      {
        '$sample': {
          'size': 1
        }
      }
    ])
    .then(([tweet]) => {
      console.log(tweet);
      return tweet; });
};

const sendTweet = status =>  T.post('statuses/update', { status }); 

const sendRandomTweet = () => {
  return fetchedQuote()
    .then(({ quote, author }) => {
      let tweet = `${quote} - ${author}`;
      do{
        const { quote, author } = fetchedQuote();
        tweet = `${quote} - ${author}`;
      }
      while(tweet.length > 280);

      sendTweet(tweet);
    }
    )
    .then(() => console.log(`tweet sent`))
    .catch((err) => console.log(`could not post tweet`, err));
};

// const sendRandomTweet = async() => {
//   const {quote, author } = await fetchedQuote();
//   let tweet = `${quote} - ${author}`;



// }
sendRandomTweet();

//create a new  object to look like --> { tweet: `QUOTE - AUTHOR` }


