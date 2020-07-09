require('dotenv').config();
const  { combineQuotes } = require('./combineQuotes');
const getMaxPage = require('./pagination');
const Tweet = require('../models/Tweet');

//filter words determined by results from the sources we were seeking to use, we wanted the quotes posted to our twitterbot to be parallel to our current reality without delving into triggering and pejorotive discussions

const filterWords = ['marriage', 'husband', 'wife', 'spouse', 'dead', 'death', 'God', 'WWE', 'divorce', 'Teach For America', 'United States', 'religion', 'Kanye', 'Floyd Mayweather', 'Donald Trump', 'racist', 'sexist', 'phobia', 'Bill Clinton', 'politic', 'politician', 'president', 'Republican', 'Democrat', 'studies', 'Joel Osteen', 'press', 'Roosevelt', 'Mexican', 'Asian', 'Bitcoin', 'America', 'rape', 'assault'];


module.exports = async() => {
  const maxPages = await getMaxPage(); 
  const allQuotes = await Promise.all(maxPages.map(maxPage => combineQuotes(maxPage)));
  const tweets = allQuotes.flat()
    .filter(tweet => filterWords.every(badWord => !tweet.quote.includes(badWord)))
    .filter(tweet => `${tweet.quote} - ${tweet.author}`
      .length < 280);
      
  return await Tweet.create(
    tweets 
  );
};
