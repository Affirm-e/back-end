// require('dotenv').config();
// require('./lib/utils/connect')();

// const app = require('./lib/app');

// const PORT = process.env.PORT || 7890;

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Started on ${PORT}`);
// });

console.log('the bot is starting'); 

const config = require('./config'); 
const twit = require('twit'); 
const T = new twit(config); 
const Twitter = require('twitter');

makeARandomTweet(); 
setInterval(makeARandomTweet, 1000 * 20);

// function to generate a random tweet tweet
function makeARandomTweet(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const tweet = {
    status: 'random number' + index + '#affirme'
  };

  T.post('statuses/update', tweet, tweeted); 

  function tweeted(err, data, response) {
    if(err)
      console.log('something went wrong'); 
  } 
  console.log('It worked'); 
  
}

//this number below is 3600000 which was calculated for every 60 minutes, times 24 so it only happens once per day 
// setInterval(makeARandomTweet, 86400000);
