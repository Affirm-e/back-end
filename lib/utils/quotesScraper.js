// dont name a file after a single function inside the file
const request = require('superagent');
const cheerio = require('cheerio');

// name this function something better, like makeQuote or parseQuote
const parseQuote = ($) => {
  return $('.qll-bg')
    .get()
    .map(el => {
      const $el = $(el);
      return {
        quote: $el.find('.b-qt').text(),
        author: $el.find('.bq-aut').text()
      };
    });
};

const combineQuotes = async({ keyword, maxPageNumber }) => {
  // use Promise.all. it will be faster
  return Promise.all([...Array(maxPageNumber)]
    .map((_, i) => getQuotes(keyword, i + 1)))
    .map(quotes => quotes.flat());
};

const getQuotes = (keyword, pageNumber) => {
  return request
    .get(`https://www.brainyquote.com/topics/${keyword}-quotes_${pageNumber}`)
    .then(res => cheerio.load(res.text))
    .then(parseQuote);
};

module.exports = {
  combineQuotes,
  getQuotes
};
 

