function guessNumber() {
    var randomNum = Math.floor(Math.random() * 26);

    //output to the console for debugging
    console.log(randomNum);
    // Welkom heten
    console.log("Welkom! Wat is je naam?")
    // Invoer van de naam
    const userName = prompt('voer uw naam in');
    // Welkomst groet
    alert('Hallo ' + userName + ', welkom op mijn website!');
    // Bericht dat het gaat beginnen
    alert('Spannend hoor... ' + userName + ', de computer kiest nu een willerkeurig getal tussen 0 en 25!');
    // declare a variable
    var g
    guess = prompt("Please enter a number between 0 and 25")
    //output to the console for debugging guesses
    //console.log("Your guess is: " + guess);

    for (guess = 0; guess < 5; guess++) {
        console.log(randomNum)
        if (guess == randomNum) {
            alert("Your guess is correct!")
            break;
        } else {
            alert("Sorry try it again")
            guess = prompt("Please enter a number between 0 and 25")
        }
    }



}


