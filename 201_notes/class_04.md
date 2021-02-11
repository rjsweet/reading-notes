# Class 04 Reading notes

  - Ducket HTML
    - Chapter 4: "Links" ( pp.74-93)
      * Links allow you to move from one web page to another. Links are created using the a element. Inside the opening a element, you put an href and then the link you want to go to, and then close the opening tag. Then before the closing a tag, put the text that the user clicks on. Each section of a website should be put into a different folder in order to organize your code. Children are a folder that is inside the root, grandchildren are folders within a folder within the root, etc. web servers are usually set up to return index.html if nothing is found. Relative urls can be used if referencing files and files in your own computer. Linking an email can be done with the mailto after an href. The target “_blank” attribute can be used to open a link to a new window. Linking within the same page can be done by href to the id of an element. Linking to a specific part of another website is also possible by using the link to the website followed by the element id.
    - Chap 15: "Layout" (pp. 358-404)
      * CSS treats each HTML item like a box
      * There are block-level boxes and inline boxes
      * It can be helpful to put grouped items into <divs>
    ### Controlling positions of elements
      * Normal Flow: Default. paragraphs appear one after the other down the page
      * Relative Positioning: moves elements from default to top, right, bottom, or left of where it would have been placed.
      * Absolute Positioning: position elements in relation to its containing element. 
      * Fixed Positioning: similar to absolute, but moves element in relation to the browser window. Good for Headings & Nav bars
      * Floating elements: Allows you to move elements far left or right. Be sure to also use the width property to indicate how wide the floated element should be. Good for images and blockquotes. Often paired with the **clear** element. You can clear left, right, both, or none. 

      You might have to use **box offset** property to tell the browser how far from the top or bottom and left or right it should be placed. 

      **z-index** property allows you to control which box appears on top. Known as **stacking context**. 

      Parents of floated elements solution: overflow property is given a value auto & the width property is set to 100%. 

      Giving organization with the look of columns is a nice touch. Best practice is to:
      * Assign HTML div element `class=column1of2` and `class=column2of2` etc.... Then assign a width, float, and margin.
  - Ducket JS
    - Chapt 3 Functions, Methods, and Objects" (pp. 86-99 only)
      ### What is a function?: A function lets you group a series of statements together to perform a specific task. 
      Statements in a function aren't alway executed when the page loads. For example, you might not want a task to run until the user clicks on a specific element on the page. 

      Steps the function needs to perform are packaged in a code block

      Code blocks consist of one or more stastatementstement contained within curly braces. Some functions need information or **parameters**. When your function provides an answer, this is known as a **return value**. 

      Most programming languages depend on a name/value pairing. the name is like a variable name i.e. variableName, and the value is the statement in the code block. When you call a function by its name, the value will run. 

    ### Declaring a Function
    **Function Declaration**: To create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces. 
    ![delcaring a function](images/IMG_7200.jpeg)

    ### Calling a Function 
    Having declared the function, you can then execute all of the statements between its curly braces with just one line of code. This is known as **calling the function**. 
    ![calling a function](images/IMG_7201.jpeg)

    ### Declaring Functions that need Information
    Sometimes you need specific information to perform a task. When you do, you declare the function with **parameters**. They act kind of like variable names. 
    ![calling a function](images/IMG_7202.jpeg)
    Argument as values: 
    ```
    getArea(3, 5)
    ```
    Arguments as variables: 
    ```md
    wallWidth = 3;
    wallHeight = 5;
    getArea(wallWidth, wallHeight)
    ```
    ### Calling Functions that need Information
    **Parameters vs arguments**: 
      * Parameters: words that act like variables i.e. width and height
      * Arguments: values that you pass into code like getArea(wallWidth, wallHeight)

    ### Getting a Single Values out of a Function
    ![calling a function](images/IMG_7203.jpeg)
    Inside this function, a variable called **area** is created which holds the calculated area of the box. The **return** keyword is used to return a value to the code that called the function. **wallOne** area is 15, which was calculated by the calculatedArea(). **wallTwo** has the area of 40. This shows how the same function can be used to perform the same step with different values

    ### Getting Multiple values out of a Function
    Functions can return more than one value using an array
    ![calling a function](images/IMG_7204.jpeg)
    Multiple variables are assigned and calculated within the function. getSize can then be called from the function. You are basically using the function to make calculations for you once it's called. 

    ### Anonymous Functions & Function Expressions
    Function Declaration: creates a function you can call later in your code. To call on this function later, you would use `area()`
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