require('dotenv').config();
const  { combineQuotes } = require('./combineQuotes');
const getMaxPage = require('./pagination');


const badWords = ['marriage', 'husband', 'wife', 'spouse', 'dead', 'death'];


module.exports = async() => {
  const maxPages = await getMaxPage(); 
  const allQuotes = await Promise.all(maxPages.map(maxPage => combineQuotes(maxPage)));
  allQuotes.flat()
    .filter(tweet => badWords.some(badWord => !tweet.quote.includes(badWord)))
    .filter(tweet => `${tweet.quote} - ${tweet.author}`
      .length < 280);
};
