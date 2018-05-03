'use-strict';

// This selects a random word to be guessed by user
function randomWord(){ 

var index = getRandomIndex(words.length);

var words = words[index];

words.splice(index, 1);

return words;

}