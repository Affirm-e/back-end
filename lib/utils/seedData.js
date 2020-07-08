require('dotenv').config();
const  { combineQuotes } = require('./combineQuotes');
const Tweet = require('../models/Tweet');
const getMaxPage = require('./pagination');


module.exports = async() => {
  const maxPages = await getMaxPage(); 
  const allQuotes = await Promise.all(maxPages.map(maxPage => combineQuotes(maxPage)));
  const tweets = allQuotes.flat()
    .filter(tweet => `${tweet.quote} - ${tweet.author}`
      .length < 280);

  await Tweet.create(
    tweets 
  );
};


