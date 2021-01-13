'use strict';

// Ask user their name and respond with greeting
var guessedCorrectly = 0;
var userName = prompt("Hello!  What is your name?")
alert(`Nice to meet you ${userName}`);

console.log(`The user's name is ${userName}`);

var nameQuestion = prompt("Do you know what my name is?").toUpperCase()

if (nameQuestion == "NO" || nameQuestion == "N") {
    alert("That's OK.  My name is Don.  Nice to meet you.")
} else if (nameQuestion == "YES" || nameQuestion == "Y") {
    guessedCorrectly ++;
    alert("Wow!  I feel so special you know my name!")
} else { 
    alert("Hmmmmm, I don't understand.  Let's move on");
}

console.log(`Does the user know my name?  ${nameQuestion}`)

var favoriteFood = prompt("Do you know what my favorite food is?").toUpperCase()
if (favoriteFood == "NO" || favoriteFood == "N") {
    alert("Well since you don't know.  My favorite food is Tacos")
} else if (favoriteFood == "YES" || favoriteFood == "Y") {
    guessedCorrectly ++;
    alert("Wow!  You know so much about me!")
} else {
    prompt("Hmmmmm, I don't understand.  Let's move on")
}

console.log(`Does the user know my Favorite food?  ${favoriteFood}`)


// Telling the person how many correct guesses
if (guessedCorrectly == 2) {
alert(`Wow!  You really know me.  ${userName} it looks like you guessed correctly ${guessedCorrectly} times.`)
} else {
    alert(`You did OK.  But you can learn more about me`)
}

console.log(`The user guessed correctly ${guessedCorrectly} times.`)