const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

// this string is reused everywhere in your application
// make a virtual so you can recreate this text easily
tweetSchema.virtual('text').get(function() {
  return `${this.quote} - ${this.author}`
})

tweetSchema.statics.random = function(callback) {
  return this
    .aggregate([
      {
        '$sample': {
          'size': 1
        }
      }
    ])
    .then(([tweet]) => tweet);
};

module.exports = mongoose.model('Tweet', tweetSchema);
