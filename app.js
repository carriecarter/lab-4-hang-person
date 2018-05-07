/* globals words */
/* exported correctLetter */
'use-strict';

  
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
    
// This selects a random word from the array in words.js to be guessed by user
function loadWord(){
        var index = getRandomIndex(words.length);
        carToGuess = words[index];
        console.log('selected car to guess is ' + carToGuess);

        carToGuess = carToGuess.toLowerCase().split("");
        console.log('individual letters of car to guess' , carToGuess);

        // eventually hide the letters on the page and replace with blanks
        // for now this shows me the letters to guess on screen
        var p = document.getElementById('car-letters');
        p.textContent = (carToGuess);
}

//guess letter input box and button 
function guessLetter() {

    var userGuess = document.getElementById("guess-box").value;
    document.getElementById("user-guess").innerHTML = userGuess;
    console.log('the user guessed the letter ' , userGuess);
        
    if (userGuess === "") {
        alert('Please guess a letter');
    }

    for(var i = 0; i < loadWord.length; i++) {
        
        if (userGuess.includes(carToGuess)) {
            alert ('alert');
            //document.getElementById("user-guess").innerHTML = 'Good guess';
        }
    }
                
    
        
    //var p = document.getElementById('correct-guess');
    //p.textContent = (userGuess);        

    
}

// Array for correct letters guessed with blanks

var correctLetter = [];
for(var i = 0; i < loadWord[i]; i++) {
    correctLetter[i] = '_';
}

