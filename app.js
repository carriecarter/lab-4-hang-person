'use-strict';

/* globals words */
/* exported correctLetter */

  
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var currentCar = []; 


// This selects a random word from the array in words.js to be guessed by user
function loadWord(){
        currentCar = [];
        var index = getRandomIndex(words.length);
        carToGuess = words[index];
        console.log('selected car to guess is ' + carToGuess);

        carToGuess = carToGuess.toLowerCase().split("");
        console.log('individual letters of car to guess' , carToGuess);

        for(var i = 0; i < carToGuess.length; i++) {
            currentCar.push('_');
        }
        var p = document.getElementById('blank-spaces');
        p.textContent = (currentCar);

}

var userGuessLetters = [];
var counter = 0;
//guess letter input box and button 
function guessLetter() {

    var userGuess = document.getElementById("guess-box").value;
    userGuessLetters.push(userGuess);

    document.getElementById("user-guess").innerHTML = userGuessLetters;
    console.log('the user guessed the letter ' , userGuessLetters);
        
    if (userGuess === "") {
        alert('Please guess a letter');
    }

    if(userGuess.length !== 1) {
        alert('Guess one letter at a time please.');
        return;
    }

    if (carToGuess.includes(userGuess)) {
        var indexOfGuess = carToGuess.indexOf(userGuess);
        console.log(indexOfGuess);

        currentCar.splice(indexOfGuess, 1, userGuess);
        counter += 1;    
    }
    else {
        counter += 1;
    }

    if (counter === carToGuess.length + 5) {
        alert('WAH WAH WAH WAHHHHHHH');
    }
    
    var p = document.getElementById('blank-spaces');
    p.textContent = (currentCar);
                       
}






