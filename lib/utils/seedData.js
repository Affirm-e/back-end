require('dotenv').config();
const request = require('superagent');
const cheerio = require('cheerio');
const chance = require('chance').Chance();

const Tweet = require('../models/Tweet');

const quoteArray = ['inspirational', 'life', 'humor', 'love', 'romance', 'happiness', 'hope', 'inspiration', 'motivational', 'spirituality', 'life-quotes'];

module.exports = async({ quotes = 50 } = {}) => {
  await Tweet.create([...Array(quotes)].map(() => ({
    quote: chance.paragraph({ sentences: 2 }),
    authorBook: chance.pickone(['unknown', chance.name()])
  })));
};
