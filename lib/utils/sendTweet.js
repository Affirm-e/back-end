const Tweet = require('../models/Tweet');
const twit = require('twit'); 
const sendSms = require('../../twitter-twilio-sms/sendSMS');

const T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}); 

const sendTweet = status =>  T.post('statuses/update', { status }); 

const sendRandomTweet = async() => {
  const tweet = await Tweet.random();
  const [tweetResult, smsResult] = await Promise.all([
    sendTweet(tweet.text),
    sendSms(tweet.text)
  ]);

  // return something from this function so the user of the function
  // can get some information about what happened
  return {
    tweetResult,
    smsResult
  };
};

module.exports = sendRandomTweet;
  
