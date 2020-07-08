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

<<<<<<< HEAD
// get the quote from the api address and assign it to a variable(object)

=======
//post route



// get the quote from the api address and assign it to a variable (object)
>>>>>>> 0745e2c301a042a06bcac6d46a1f299479fb0665
const fetchedQuote = () => { 
  return Tweet
    .aggregate([
      {
        '$sample': {
          'size': 1
        }
      }
    ])
<<<<<<< HEAD
    .then(([tweet]) => tweet);
};
=======
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
>>>>>>> 0745e2c301a042a06bcac6d46a1f299479fb0665



// }
sendRandomTweet();

//create a new  object to look like --> { tweet: `QUOTE - AUTHOR` }


