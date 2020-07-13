require('dotenv').config();
const  { combineQuotes } = require('./combineQuotes');
const getMaxPage = require('./pagination');
const Tweet = require('../models/Tweet');
const filterWords = require('../utils/filterWords');


module.exports = async() => {
  const maxPages = await getMaxPage(); 
  const allQuotes = await Promise.all(maxPages.map(maxPage => combineQuotes(maxPage)));
  const tweets = allQuotes.flat()
    .filter(tweet => filterWords.every(badWord => !tweet.quote.includes(badWord)))
    .filter(tweet => tweet.text.length < 280);
      
  return Tweet.create(
    tweets 
  );
};
