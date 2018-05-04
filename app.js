'use-strict';




// This selects a random word to be guessed by user
function loadWord(){ 
    // for(i = 0; i > 5; i++) {
        var words = ['Honda', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche'];
        var index = getRandomIndex(listOfWords.length);
        console.log(index);
        
        var words = listOfWords[index];
        
        // removes car from array
        listOfWords.splice(index, 1);
        
        // returns randomly selected car
        console.log(words);

        return words;   
}


// var str = car;
// var n = str.length;
// document.getElementById("guess-word").innerHTML = n;

// console.log(n);




// function guess() {
//     var carString = car.length;



// }

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

