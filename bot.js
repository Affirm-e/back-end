require('dotenv').config();
const twit = require('twit'); 


const tweet = {
  status: 'trying to post to the twitter account affirme again again again'
};

const T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}); 

//post route
T.post('statuses/update', tweet, tweeted); 

//callback, not really needed for post, but will give an error
function tweeted(err, data, response) {
  if(err) {
    console.log('Something went wrong');
  } else {
    console.log('It worked');
  }
}
