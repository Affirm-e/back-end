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

tweetSchema.statics.random = function(callback) {
  this.count(function(err, count) {
    if(err) {
      return callback(err);
    }
    const random = Math.floor(Math.random() * count);
    this.findOne().skip(random).exec(callback);
  }).bind(this);
};

module.exports = mongoose.model('Tweet', tweetSchema);
