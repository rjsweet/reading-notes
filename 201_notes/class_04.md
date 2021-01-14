# Class 04 Reading notes

  - Ducket HTML
    - Chapter 4: "Links" ( pp.74-93)
    - Chap 15: "Layout" (pp. 358-404)
  - Ducket JS
    - Chapt 3 Functions, Methods, and Objects" (pp. 86-99 only)
    - Article: "6 Reasons for Pair Programming"

## Class Warm Up

```javascript

var numbers = [10,3,2,5,7,6,9,12,15,4,19,1];
var answer = []
for ( var i = 0; i < numbers.length; i++) {
  if (numbers[i] < 6 || numbers[i] > 12) {
    answer.push(numbers[i])
  }
}
console.log(answer);

/** * Use the array created above and some kind of loop to console.log every number within the array. 
* don't console.log any values between and equalling 6 through 12
```
- Note on Warm up, there's several alternate ways to do this, reference video of class. 
- Words to look up "arguments" and parameters" in relation to javascript
- look up the difference between "let" and "var"

## Code Review
  - Reviewed lab assignment 03 Extend guessing game.
  - Look up comparing string numbers to string numbers in javascript
  - when working with TA's comment out your code line by line. Make sure you know what each is actually doing.
  - NaN will -not- === NaN

## CSS Layout

- Prior class covered the box model.
- This one focuses on css position properties. These eleements dictate the flow of a number of elements.
  - Position property
    - Absolute : positions the element outside of the normal flow of elements around it, and anchnors it instead to it's parent.
    - Fixed : "I want to remove the element from the normal flow, the element will be positioned with the viewport." ( viewport: the part of the html page the user is currently viewing )
    - Relative : The most common way to position elements, keeps the element within the normal flow, but allows positioning  with left and right; also allowing the element to be an anchor point for absolute positioned elements. 
    - Static: they follow a consistent flow that is preserved with the elements around it, will not be usable as an anchor point for absolute elements.
    - "Sticky" : newer element. combination of fixed, and absolute. Look this one up. Not necessarily covered by the course. let's you stick an element to the nearest elements using the left, right, top and bottom css properties. Without those properties it just behaves normally.
  - Display property

### Side notes for CSS
  - look up options for a reset css file to remove default parameters, positioning properties. 

## JS Functions

- A variable that includes ( not just data type ) but blocks of javascript
  - function declaration: creating a function, defining function operations.
  - arguments: the data provide a function when you call / execute the function.
  - parameters: the data that the function defines, which comes from it's execution
    - think of this as a variable that only that specific function can use.
  - scope: the logic within the curly braces of a function. 
    - function parameters are only usable within the scope.
  - global vs local scope: 
    - functions are able to access global scope ( variables that are defined outside the curlies);
    - functions only ave access to local scope that is within their own curlies( if other functions )
  - function hoisting: functions that are declared with the function keyword, are able to be used on the lines above where they are defined. 
  - Return values: a value that i
```javascript

// var array = [1, 2, 3];
// array.push(4);

// with functions we can store these operations to run when we chose

// function pushArray () {
 // var array = [1, 2, 3];
  // array.push(4);
// }

// pushArray(); // calling or executing the function. 

pushArray(4); // 4 is an argument. We need to make sure our function is defined with the proper parameters.
var arrayGlobal = [1,2,3]
function pushNumber(num) {
  var arrayLocal = [1, 2, 3];
  arrayGlobal.push(num);
  return arrayLocal
}
// console.log(num); // we would get undefined;
console.log(arrayLocal); // we get errors for these because they are defined locally.
// for every argument there should be a coresponding parameter
```

## Pair Programming

-What? Two people dedicated to the same outcome, there is a driver ( who writes all the code ) and a navigator ( who keeps the driver in check )
  - Both share the responsibility for producing a working thing.
    - Navigator -we need a functiong that sums 2 values
    - Driver - going to declare a functiong that has (param1, param2) {}
    -Navigator - maybe name the parameters num1, and num2.
-Why Separting the responsibilities of each programmer makes us more efficient.
- How? The driver, will fork the navigator's project repo on github, and clone it down to their pc; they will both then do work on the project. 
  - a fork is an exact copy of someone elses repository, but under your github account. 
  - After work is completed you make a pull request to merge the code that you worked on together back into the original persons repo. (navigator being the originator)