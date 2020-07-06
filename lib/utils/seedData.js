// require('dotenv').config();
const  combineQuotes  = require('./cheerio.js');
const Tweet = require('../models/Tweet');



module.exports = async() => {
  const tweets = await combineQuotes(3);
  console.log(tweets);
};
