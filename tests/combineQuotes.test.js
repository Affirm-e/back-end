const { MongoMemoryServer } = require('mongodb-memory-server');
const mongodb = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const Tweet = require('../lib/models/Tweet');
const { combineQuotes } = require('../lib/utils/combineQuotes');

describe('function combining quotes', () => {
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

  it('can fetch a quote', () => {
    return combineQuotes({ keyword: 'inspirational', maxPageNumber: 1 })
      .then(res => {
        expect(res).toHaveLength(26);
      });
  });
});
