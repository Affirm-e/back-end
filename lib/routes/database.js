const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()
  .get('/random', (req, res, next) => {
    Tweet
      .aggregate([{ $sample: { size: 1 } }])
      .then(tweet => res.send(tweet[0]))
      .catch(next);
  });
