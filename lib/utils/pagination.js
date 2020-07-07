const request = require('superagent');
const cheerio = require('cheerio');

const keywordArray = ['motivational', 'inspirational', 'positive', 'life', 'love'];

const getMaxPage = () => {
  return Promise.all(keywordArray.map(keyword => {
    return request
      .get(`https://www.brainyquote.com/topics/${keyword}-quotes`)
      .then(res => {
        const $ = cheerio.load(res.text); 

        const maxPage = $('.pagination').children('li').eq(-2)
          .text();
      
        return maxPage;
      }
      );
  }));
};
getMaxPage().then(console.log);
  
module.exports = getMaxPage;
