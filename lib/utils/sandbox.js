const allScrapedQuotes = require('./pagination.js');

module.exports = async() => {
  const quotes = await allScrapedQuotes(3);
  console.log(quotes);
};

