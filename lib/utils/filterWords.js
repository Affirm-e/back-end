require('dotenv').config();

//filter words determined by results from the sources we were seeking to use, we wanted the quotes posted to our twitterbot to be parallel to our current reality without delving into triggering and pejorotive discussions

const filterWords = ['marriage', 'husband', 'wife', 'spouse', 'dead', 'death', 'God', 'WWE', 'divorce', 'Teach For America', 'United States', 'religion', 'Kanye', 'Floyd Mayweather', 'Donald Trump', 'racist', 'sexist', 'phobia', 'Bill Clinton', 'politic', 'politician', 'president', 'Republican', 'Democrat', 'studies', 'Joel Osteen', 'press', 'Roosevelt', 'Mexican', 'Asian', 'Bitcoin', 'America', 'rape', 'assault', 'CEO', 'entrepeneur', 'homeland', 'Richard M. Nixon', 'bills', 'paycheck', 'bullet', 'George S. Patton', 'war', 'fight', 'knife', 'murder', 'gun', 'brutal', 'police', 'hell', 'heaven', 'Heaven', 'Hell', 'Reich', 'J.K. Rowling', 'English', 'minority'];

module.exports = filterWords;
