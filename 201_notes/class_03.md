# Class 03 Notes

## Reading Notes

  - Ducket html
    -Chapter 3: “Lists” (pp.62-73)
    * **Ordered Lists**: `<ol>` as the parent an `<li>` as the children. Ordered Lists show up as a numbered list.
    * **Unordered Lists**: `<ul>` as the parent and `<li>` as the children. Use CSS list-style-type: to change the aesthetic of your bullets
    * **Definition Lists**: `<dl>` is the parent, `<dt>` is the term, and `<dd>` is the definition
    * You can nest lists within lists i.e. tabbed bullets within an unordered list with be a `<ul>` within a `<ul>`
    -Chapter 13: “Boxes” (pp.300-329)
    * **Box Dimensions** - width, height: 
      * pixels: most popular because it provides a lot of control
      * percentages: sizes box relative to the size of the browser window or container it's inside of
       * ems: size of the box is based on the size of text within it
        * **Limiting width** - min-width, max-width: max-width property to ensure lines of text do not appear too wide within a big browser window, and you can use the min-width property to make sure that they do not appear too narrow.
  - Ducket JS
    - Review from Reading 02 - Chapter 2: “Basic JavaScript    Instructions” (pp.70-73)
    Chapter 4: “Decisions and Loops” from switch statements on (pp.162-182)

### Class Notes

  Class 03: Box Model & Loops

  ## Warm Up

  ```javascript

  `use strict`;

  var favoriteLanguage = prompt('What is your favorite programming language?')
  

  if (case.ToLowerCase() === "javascript")
  {
    alert("My Favorite is Javascript");

  }

  else if (case.ToLowerCase() === "css"){
    alert("My favorite is css");
  }
  else if (case.ToLowerCase() === "html"){
    alert("My favorite is html");
  }

  else{
    alert("try again?");
  }

  /**
    * add some `if` statements or `switch` cases that produce different  `alert` messages depending on which programming 
    * if they chose 'JavaScript', have the 'alert' message print everything in all caps!
  **/

  ```
"method" a function that 'lives' on a type of string. Look this up. 

"banana".toUpperCase(); // this will work, you might not want to.

## Code Review

  -Review of Lab 03 examples
      - special note, never use "location" as a variable. Look this up. "document" "local storage" too. Basically what are considered "global varibles"

## HTML / CSS Box Model

  #### Questions

    - How to position Elements among other elements.
    - Each Element is a box. It has a height and a width which equates to a number.
    - Each different element type has different default properties for these numbers.
    
    The CSS properties to consider that control an element's box.
    - Margin: Space between the element content, and any element adjacent to it. 
    - Padding: The space around the content itself and it's surrounding box. ((background colors will be 'behind' this? Look this up. Also look up the alterable nature of the individual properties.))
    -Border: Includes size, style and color; "thin, solid, black" A line (of various widths), around just the content.
    - Height + Width: the amount of space the actual content takes up.
        
        - reference CSS2 Cheat Sheet in class repository-
          -also https://css-playground.com/view/53/box-model-introduction-playground 
          - also https://css-tricks.com/fighting-the-space-between-inline-block-elements/
    
    Other things to look up

      - "reset css"
      - " how to clear floats in css"

## Formal JS Logic

  - What goes inside of those parenthesis of a conditional statement.
  - Truthy vs Falsey; these are things that are not specifically true or false that js thinks are true or false. 
    - Booleans: true and false. 1 or 0.
    - JS is wierd and has this idea of things that evaluate to true / false without being exactly True or False.
      - Truthy
        - true
        - numbers 1 or more, as well as 1 or more negative numbers will evaluate to true
        - strings that are not empty
        -'0' will evaluate to true
      - Falsey
        - False
        - 0
        - '' empty strings
        - null
        - undefined
        - NaN "Not a Number"

  - Logical operators
    -! not something can be added to a true or false such as !true or !false effectively "flipping" the truth or falsehood of the statement.
    -&& two side of a statement need to be true / truthy
    -|| only one side of a statement needs to be true / truthy

## Loops

  - A way to get our code to run more than once, without having to write it more than once.
  - 3 types of loops in JavaScript
    - While Loop: while a condition is truthy, run the following docde over and over again. Warning, this kind of statement can cause a browser freeze. 
```javascript

var condition = true;
while (condition) {
  //this will run as long as condition is true
  console.log('truth');
  condition = false;
}

// we'll only get to code below the loop, if the condition above becomes falsey at some point. 
console.log('loop is done');
// this prompt returns a string ==> null '' => 'some name'
var answer = prompt('What is your name?');
console.log(answer);
while (!answer) {
  console.log('you have not given me a name');
  answer = prompt('you have not given me a name, please answer me!!');
}
console.log('thank you');
```
    - for loop: 
```javascript
// for loop syntax: initializer / condition for the loop / incrementer, the thing we want to occur after every loop
for (var i = 0; i < 10; i++) {
  console.log('loop is running ' + i);
}
console.log('loop is done');

var arrayOfQuestions = ['What is your name?', 'what is your favorite color?'];
// arrayOfQuestions[someNumber] => some number rpresents the position of items with the array
var arrayOfAnswers = []
// this loop is running against the number of items in the array of Questions.
for ( var i = 0; i < arrayOfQuestions.length; i++){
 arrayOfAnswers.push(prompt(arrayofQuestions[i])); // also could use arrayOfAnswer.push(answer);
 // push order will always be from the right to the left. This way <== 
// this will stop your loop in it's tracks
// break;
}

// let's go in reverse
// array.length is the total number of items, not necessarily the ending index value
for ( var i = 0; i < arrayOfQuestions.length - 1; i >= 0; i--) {
  //this will do things in reverse order;
}

console.log('loop is done', arrayOfAnswers);
```
  - Do While loop
```javascript
// this will run once regardles whether the condition is truth or false
do {
  console.log('condition is truthy');
  } while (condition);
```

https://css-tricks.com/box-sizing/