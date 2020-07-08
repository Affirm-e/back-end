const request = require('superagent');
const cheerio = require('cheerio');

const makeObject = ($) => {
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
  let arr = [];
  for(let i = 1; i <= maxPageNumber; i++) {
    const quotes = await getQuotes(keyword, i);
    arr.push(quotes);
  }
  return arr.flat(); 
};

const getQuotes = (keyword, pageNumber) => {
  return request
    .get(`https://www.brainyquote.com/topics/${keyword}-quotes_${pageNumber}`)
    .then(res => cheerio.load(res.text))
    .then(html => makeObject(html));
};


module.exports = {
  combineQuotes,
  getQuotes
};
 

