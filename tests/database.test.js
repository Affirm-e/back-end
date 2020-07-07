const { MongoMemoryServer } = require('mongodb-memory-server');
const mongodb = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');
const Tweet = require('../lib/models/Tweet'); 

describe('database routes', () => {
  beforeAll(async() => {
    const uri = await mongodb.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  }); 

  beforeEach(() => {
    Tweet.create([{
      quote: 'quote one', 
      author: 'author one'
    }, {
      quote: 'quote two',
      author: 'author two'
    }, {
      quote: 'quote three',
      author: 'author three'
    }, {
      quote: 'quote four',
      author: 'author four'
    }]);
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongodb.stop();
  }); 

  it('gets a random tweet via GET', () => {
    return request(app)
      .get('/api/v1/tweet/random')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          quote: expect.anything(String),
          author: expect.anything(String),
          __v: 0
        });
      });
  });
});
