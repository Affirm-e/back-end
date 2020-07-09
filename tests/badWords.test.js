const { MongoMemoryServer } = require('mongodb-memory-server');
const mongodb = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const badWords = require('../lib/utils/badWords');


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
    return badWords()
      .then(res =>{
        expect(res).toEqual(24);
      });
  });
  
   
});
