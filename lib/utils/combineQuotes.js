const request = require('superagent');
const cheerio = require('cheerio');
// const chance = require('chance').Chance();
// const getMaxPage = require('./pagination');


// const Tweet = require('./lib/models/Tweet');
// getMaxPage that returns the last page.  goes to site scrapes total pages

// const getMaxPage = pageNumber.for

// request
//   .get(`https://www.goodreads.com/quotes/tag/${chance.pickone(quoteArray)}?page=${chance.integer({ min: 1, max: 100 })}`);
// getpage takes page number and um gets all of the quotes on that page number
// scrape or seed or whatever.  call getpage function. then for loop that uses getpage
// one scraper gets number of pages and one scraper that gets quotes on page and then final function combines magical abilities of both scrapers


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


module.exports = combineQuotes;
