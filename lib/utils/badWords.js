const filter  = (string)  => {
  const badwords = ['bad', 'words', 'for', 'you'];

  for(let i = 0; i < badwords.length; i++) {
    let word = badwords[i];
    if(string.includes(word) === true) {
      sendRandomTweet();
    }
  }
  return string;
};

module.exports = filter;
