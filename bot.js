// require('dotenv').config();
// require('./lib/utils/connect')();

// const app = require('./lib/app');

// const PORT = process.env.PORT || 7890;

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Started on ${PORT}`);
// });

const config = require('./config'); 
const twit = require('twit'); 
const T = new twit(config); 

const tweet = {
  status: 'another different tweet'
};

T.post('statuses/update', tweet, tweeted); 

//callback, not really needed for post, but will give an error
function tweeted(err, data, response) {
  if(err) {
    console.log('Something went wrong');
  } else {
    console.log('It worked');
  }
}
