// This selects a random word to be guessed by user
function loadWord(){ 
    // for(i = 0; i > 5; i++) {
        var listOfWords = ['Honda', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche'];
        var index = getRandomIndex(listOfWords.length);
        console.log(index);
        
        var car = listOfWords[index];
        console.log('selected car is ' + car);
        // removes car from array
        // listOfWords.splice(index, 1);
        
        // returns randomly selected car
        console.log(words);

        var selectedCar = car.split("");
        console.log(selectedCar);

        var p = document.getElementById('car-letters');
        p.textContent = (selectedCar);

}

//guess letter input box and button 
function guessLetter() {
    var userguess = document.getElementById("guess-box").value;
    document.getElementById("userguess").innerHTML = userguess;
    console.log(userguess);

    if (userguess === "") {
        alert('Please guess a letter');
    }

    
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}