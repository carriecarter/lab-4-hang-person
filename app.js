'use-strict';




// This selects a random word to be guessed by user
function randomWord(){ 
    for(i=0 , i>5 , i++) {
    }
        var index = getRandomIndex(words.length);

        var words = words[index];

        words.splice(index, 1);

        return words;
    
        console.log(words);
       
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }