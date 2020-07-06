const request = require('superagent');
const cheerio = require('cheerio');
const chance = require('chance').Chance();

const getMaxPage = () => {
  return request
    .get(`https://www.brainyquote.com/topics/inspirational-quotes`)
    .then(res => {
      const $ = cheerio.load(res.text); 

      const maxPage = $('.pagination').children('li').eq(-2)
        .text();
      
      return maxPage;
    }
    );
};
  
module.exports = getMaxPage;
