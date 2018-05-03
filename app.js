'use-strict';




// This selects a random word to be guessed by user
function loadWord(listOfWords){ 
    // for(i = 0; i > 5; i++) {
        
        var index = getRandomIndex(listOfWords.length);
        console.log(words);


        var words = listOfWords[index];
        
        // removes car from array
        listOfWords.splice(index, 1);

        // returns randomly selected car
        return words;
        
        // var carOne = loadWord();
        // words.splice(index, 1);


        //document.getElementById('guess-word' + i).textContent = carOne;

    // }
}
var car = words;
console.log(words.length);

function guess() {
    var carString = car.length;



}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

