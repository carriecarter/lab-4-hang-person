
    var car = null;
    var selectedCar = null;
    
// This selects a random word to be guessed by user
function loadWord(){
        var listOfWords = ['Honda', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche'];
        var index = getRandomIndex(listOfWords.length);
        console.log(index);
        
        car = listOfWords[index];
        console.log('selected car is ' + car);
        
        
        // returns randomly selected car
        console.log(words);

        selectedCar = car.split("");
        console.log('split value of selected car is' , selectedCar);

        var p = document.getElementById('guess-word');
        p.textContent = (blanks);

       // var blanks = selectedCar;
        //p. textContent = document.getElementById('blank-spaces');
}
        
function fribbets() {
    
}

        element.addEventListener("enter", fribbets);




//guess letter input box and button 
    function guessLetter() {

        var userguess = document.getElementById("guess-box").value;
        document.getElementById("userguess").innerHTML = userguess;
        console.log(userguess);
        console.log('this is car being guessed' , car);
        
        if (userguess === "") {
            alert('Please guess a letter');
        }
        if (car.includes(userguess)) {
            correctGuess();

        }
        var p = document.getElementById('correct-guess');
        p.textContent = (userguess);

        function correctGuess(){
        document.getElementById("userguess").innerHTML = 'Good guess';

        }
        
        // var userguess = includes(selectedCar[i]);
        
        // if (userguess = selectedCar[i]) {
        //     alert('Correct!');
        
        // console.log(userguess);
        // }
    }
        console.log ('FRIBBETS')
    function getRandomIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
