const request = require('superagent');
const cheerio = require('cheerio');
const chance = require('chance').Chance();
// const Tweet = require('./lib/models/Tweet');



const quoteArray = ['inspirational', 'life', 'humor', 'happiness', 'hope', 'inspiration', 'motivational', 'spirituality', 'life-quotes'];

// getMaxPage that returns the last page.  goes to site scrapes total pages

// const getMaxPage = pageNumber.for

// request
//   .get(`https://www.goodreads.com/quotes/tag/${chance.pickone(quoteArray)}?page=${chance.integer({ min: 1, max: 100 })}`);
// getpage takes page number and um gets all of the quotes on that page number
// scrape or seed or whatever.  call getpage function. then for loop that uses getpage
// one scraper gets number of pages and one scraper that gets quotes on page and then final function combines magical abilities of both scrapers

const getLastPage = request
  .get(`https://www.brainyquote.com/topics/inspirational-quotes`)
  .then(res => {
    const $ = cheerio.load(res.text);

    const lastPage = $('.pagination')
      .get()
      .map(el => el.text);

    console.log(lastPage);
  });

// [...Array(getLastPage)].map((_, i)=> {
//   request
//     .get(`https://www.brainyquote.com/topics/inspirational-quotes_${i}`)
//     .then(res => {

//       const $ = cheerio.load(res.text);
    
//       const quoteText = $('.qll-bg')
//         .get()
//         .map(el => {
//           const $el = $(el);
//           return {
//             quote: $el.find('.b-qt').text(),
//             author: $el.find('.bq-aut').text()
//           };
//         });
//       console.log(quoteText);
//     });


        
  // console.log(quoteText);

   
  // console.log(quoteText);
  // for(let i = 0; i < quoteText.length; i++) {
  //   // console.log(quoteText[i][0]);
  //   console.log(quoteText[i][1]);
  // }
// });