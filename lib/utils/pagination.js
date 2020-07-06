const request = require('superagent');
const cheerio = require('cheerio');

//function that loops through the pages 
let allQuotes = [];
const allScrapedQuotes = (pageNumber) => {
  for(let i = 0; i < pageNumber; i++) {
    const pageQuotes = scrapedQuotes(i);
    allQuotes.push(pageQuotes);
  }
  return allQuotes;
};

//const that stores individual pages of quotes

const scrapedQuotes = (pageNumber) => {
  const baseUrl = `https://www.brainyquote.com/topics/inspirational-quotes_${pageNumber}`;
  return request
    .get(baseUrl)
    .then(res => cheerio.load(res.text))
    // .then(res => console.log(res))
    .then(data => completeQuoteObject(data))
    .then(data => console.log(data));//
};

//find the elements that hold quote and author and saves them into a list 

const completeQuoteObject = $ => {

  const test = $('.qll-bg');
  
  return $('.qll-bg').get()
    .map((el) => {
      console.log(test);
      return {
        quote: $(el).find('.b-qt').text(),
        author: $(el).find('.bq-aut').text()
      };
      
    });
};

console.log(allScrapedQuotes(3));

// const paginationFunc = await allScrapedQuotes(18);

module.exports = allScrapedQuotes;





