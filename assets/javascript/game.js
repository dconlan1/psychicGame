// first create a random number
// then capture what letter user is thinking maybe do a prompt or alert?
// compare the user's number guess against the random number created. 
// if they match, then return "you win"
// also, record a win
// create the following vars : wins, losses, guessLeft, guessesSoFar, userGuess, computerGuess.

//set the array of letters for evaluation. 

var my_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set the variables to be used. 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetter = [];
var computerGuess = null;

//this sets the value of guessesLeft into the DOM ID of "guesses-so-far".
var guesscount = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessesLeft;
};

//this sets the random computer guessed letter. 
var computerGuessedLetter = function () {
    computerGuess = my_array[Math.floor(Math.random() * my_array.length)];
};

//this sends the number of guesses by user to the DOM ID of "your-guesses-so-far".
var guessedSoFarUpdate = function () {
    document.querySelector("#your-guesses-so-far").innerHTML = guessedLetter.join(", ");
};

//this resets the game. 
var reset = function () {
    guessesLeft = 9;
    guessedLetter = [];
    computerGuessedLetter();
    guesscount();
    guessedSoFarUpdate();
    
};

//these are the functions to capture the times user has guessed, updates how many guesses
//the user has left, and captures each letter guessed. 
guesscount();
computerGuessedLetter();


//this captures the actual letter keyed into the computer and converts any capitalized key
//into a lower case key. 
document.onkeyup = function (key) {
    guessesLeft--;
    var pressedLetter = String.fromCharCode(key.which).toLowerCase();

//this appends the new letter to the end of the new user created array and sends it to be
//evaluated against the computer guess. 
    guessedLetter.push(pressedLetter);

//this is the process for evaluating whether the user guess matches the random computer evaluation.
//then it returns a win.
    guesscount();
    guessedSoFarUpdate();
    if (pressedLetter === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

//this adds does the same but for losses.
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
};
