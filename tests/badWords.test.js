const { MongoMemoryServer } = require('mongodb-memory-server');
const mongodb = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const { filter } = require('../lib/utils/fetchedQuote');


describe('bad words filter', () => {
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

  it('filters quotes according to selected bad words', () => {
    return filter()
      .then(res => {
        expect(res).toEqual({
          
        });
      });
  });
  
   
});
