/* globals words */
'use-strict';

    var car = null;
    var selectedCar = null;

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
    
// This selects a random word from the array in words.js to be guessed by user
function loadWord(){
        var index = getRandomIndex(words.length);

        carToGuess = words[index];
        console.log('selected car to guess is ' + carToGuess);

        carToGuess = carToGuess.split("");
        console.log('split value of car to guess is' , carToGuess);


        var p = document.getElementById('car-letters');
        p.textContent = (carToGuess);

}

var carToGuess;

//guess letter input box and button 
    function guessLetter() {

        var userGuess = document.getElementById("guess-box").value;
        document.getElementById("user-guess").innerHTML = userGuess;
        console.log(userGuess);
        
        if (userGuess === "") {
            alert('Please guess a letter');
        }
        
        var p = document.getElementById('correct-guess');
        p.textContent = ('the user guessed the letter ' , userGuess);

        function correctGuess(){
        document.getElementById("user-guess").innerHTML = 'Good guess';

        }
        

        // var userguess = includes(selectedCar[i]);
        
        // if (userguess = selectedCar[i]) {
        //     alert('Correct!');
        
        // console.log(userguess);
        // }
    }

    //createBlanks();

//var newArray = [];
//for (var i = 0; i < selectedCar.length; i++) {
    //newArray[i]= '_';
//}

//show results to user
//function createBlanks() {
//    document.getElementById('blank-spaces').textContent = newArray.join('');
//}
