const { sendRandomTweet } = require("./fetchedQuote");

var str = 'hello there';

const filter  = (string)  => {
  const badwords = ['bad', 'words', 'for', 'you'];
  let state = true;

  for(let i = 0; i < badwords.length; i++) {
    let word = badwords[i];
    if(string.includes(word) === true) {
      sendRandomTweet();
    }
  }
  return string;
};



filter(str);

// console.log(filter(str));

