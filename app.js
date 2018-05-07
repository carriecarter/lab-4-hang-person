/* globals words */
/* exported correctLetter */
'use-strict';

    var car = null;
    var selectedCar = null;
    var letter

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

        var p = document.getElementById('car-letters');
        p.textContent = (carToGuess);
}

var carToGuess;

// Array for correct letters guessed with blanks

var correctLetter = [];
for(var i = 0; i < carToGuess.length; i++) {
    correctLetter[i] = '_';
}

//guess letter input box and button 
function guessLetter() {

    var userGuess = document.getElementById("guess-box").value;
    document.getElementById("user-guess").innerHTML = userGuess;
    console.log('the user guessed the letter ' , userGuess);
        
    if (userGuess === "") {
        alert('Please guess a letter');
    }

    if (userGuess = carToGuess[i]) {
        document.getElementById("user-guess").innerHTML = 'Good guess';
            
    }
        
    var p = document.getElementById('correct-guess');
    p.textContent = (userGuess);        

    // clears text box for next guess
    document.getElementById('user-guess').value = '';

    }
    
