require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongodb = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const  { combineQuotes }  = require('../lib/utils/combineQuotes');
const Tweet = require('../lib/models/Tweet');


const seedData = async() => {
  const maxPages = [{ keyword: 'inspirational', maxPageNumber: 1 }]; 
  const allQuotes = await Promise.all(maxPages.map(maxPage => combineQuotes(maxPage)));
  const tweets = allQuotes.flat()
    .filter(tweet => `${tweet.quote} - ${tweet.author}`
      .length < 280);

  return await Tweet.create(
    tweets 
  );
};

describe('seedData function limiting quotes to 280 characters', () => {
  beforeAll(async() => {
    const uri = await mongodb.getUri();
    return connect(uri);
  });
    
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongodb.stop();
  });
  
  it('only fetches quotes that meet character limit criteria', () => {
    return seedData()
      .then(res => {
        expect(res).toHaveLength(25);
      });
  });
});




// .get from one page in the database
// expect a return of the amount of quotes that meet the 280 character criteria 
// 
