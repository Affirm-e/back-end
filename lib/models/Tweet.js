const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({

  quote: {
    type: String,
    required: true
  },
  authorBook: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);
