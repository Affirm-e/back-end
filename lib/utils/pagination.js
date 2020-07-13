const request = require('superagent');
const cheerio = require('cheerio');

const keywordArray = ['wisdom', 'courage'];

const getMaxPage = () => {
  return Promise.all(keywordArray.map(keyword => {
    return request
      .get(`https://www.brainyquote.com/topics/${keyword}-quotes`)
      .then(res => {
        const $ = cheerio.load(res.text); 

        const maxPageNumber = $('.pagination').children('li').eq(-2)
          .text();
      
        return { keyword, maxPageNumber };
      }
      );
  }));
};
  
module.exports = getMaxPage;
