require('dotenv').config();
const  combineQuotes  = require('./combineQuotes');
const Tweet = require('../models/Tweet');
const getMaxPage = require('./pagination');


module.exports = async() => {
  const maxPage = await getMaxPage(); 
  const tweets = await combineQuotes(maxPage);

  await Tweet.create(
    tweets 
  );
  // console.log(maxPage);
  // console.log(tweets);
};
