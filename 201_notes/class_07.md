# Class 07: Object Oriented Programming

# Read: 07 - HTML Tables; JS Constructor Functions

## Domain Modeling
[Link to article](https://github.com/codefellows/domain_modeling#domain-modeling)

This is object-oriented programming in JavaScript at its most fundamental level.

1. The new keyword instantiates (i.e. creates) an object.
1. The constructor function initializes properties inside that object using the `this.` variable.
1. The object is stored in a variable for later use.

**Methods can be added to a constructor function's prototype**


## HTML book Ch.6: “Tables” (pp.126-145)

HTML | Description
-----|-----
`<table>` | Used to create a table
`<tr>` | Start of each row (table row)
`<td>` | Start of each cell (table data)
`<th>` | Table header. Used just like tr, but it's purpose is to represent the header
`colspan="number of columns"`  | Indicates how many columns a cell should run
`rowspan="number of rows"` | Indicates how many rows a cell should run
`<thead>, <tbody>, and <tfoot>` | Help distinguish between the main content of the table and the first and last rows
Old code | in old HTML, width and color were defined the the HTML element tags

## JS Book| Ch.3: “Functions, Methods, and Objects” (pp.106-144)

emember earlier literal notation ?
var hotel = {};

#### Creating an Object   Constructor Notation
```
var hotel = new Object();
hotel.name: 'Quay';
hotel.rooms: 40;
hotel.booked: 25;
hotel.gym: true;
hotel.roomTypes: ['twin', 'double', 'suite'];
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
  };

to update a property
hotel.name = 'Park'; OR
hotel['name'] = 'Park';
to delete a property
delete hotel.name;
hotel.name = ''; // to clear value
```

#### creating many objects constructor notation
```
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.room - this.booked;
  };
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 140, 55);
```

#### This - keyword
its scope and meaning depends on how it is used;
local inside a function, inside an object, or global.

#### storing Data
+ in Variables
+ Arrays
+ individual Objects
+ multiple objects (object creator function)

Arrays are objects with index numbers `[0]` as individual properties - ARRAYS SEQUENCE IS IMPORTANT / STORED

Arrays inside an object
Objects inside an Array

#### Built in Objects
+ Browser Object
+ Document Object DOM
+ Global Javascript Object



### The Browser Object Model: the Window Object

The window object represents the current browser window or tab. It is the topmost object in the Browser Object Model, and it contains other objects that tell about browser.

| PROPERTY  | DESCRIPTION  |
|---|---|
| `window.innerHeight`  | Height of window (excluding browser chrome/user interface) (in pixels)  |
| `window.innerWidth` | Width of window (excluding browser chrome/user interface) (in pixels)  |
| `window.pageXOffset`  | Distance document has been scrolled horizontally (in pixels)  |
| `window.pageYOffset`  | Distance document has been scrolled vertically (in pixels)  |
| `window.screenX`  | X-coordinate of pointer, relative to top left corner of screen (in pixels)  |
| `window.screenY`  | Y-coordinate of pointer, relative to top left corner of screen (in pixels)|
| `window.location`  | Current URL of window object (or local file path)  |
| `window.document`  | Reference to document object, which is used to represent the current page contained in window  |
| `window.history`  | Reference to history object for browser window or tab, which contains details of the pages that have been viewed in that window or tab  |
|`window.history.length`| Number of items in hi story object for browser window or tab  |
| `window.screen` | Reference to screen object  |
| `window.screen.width`  | Accesses screen object and finds value of its width property (in pixels)  |
| `window.screen.height`  |Accesses screen object and finds value of its height property (in pixels)   |


| METHOD  | DESCRIPTION  |
|---|---|
| `window.a1ert()`  | Creates dialog box with message (user must click OK button to close it)  |
| `window.open()`  | Opens new browser window with URL specified as parameter|
| `window.print()`  | Tells browser that user wants to print contents of current page (acts like user has clicked a print option in the browser's user interface) |

### The Document Object Model: the Document Object   

Here are some properties of the document object, which tell you about the current page

| PROPERTY  | DESCRIPTION  |
|---|---|
| `document.title` | Title of current document  |
| `document.lastModified`  | Date on which document was last modified  |
| `document.URL`  | Returns string containing URL of current document  |
| `document.domain`  | Returns domain of current document  |  

The following are few of the methods that select content or update the content of a page 
| METHOD  | DESCRIPTION  |
|---|---|
| `document.write()`  | Writes text to document   |
| `document.getElementByld()`  | Returns element, if there is an element with the value of the id attribute that matches   |
| `document.querySe1ectorAll()`  | Returns list of elements that match a CSS selector, which is specified as a parameter  |
| `document.createElement()`  | Creates new element  |
| `document.createTextNode()`  | Creates new text node  |


### Global Objects: String Object   

These properties and methods are often used to work with text stored in variables or objects.

| METHOD  | DESCRIPTION  |
|---|---|
| `toUpperCase()`  |Changes string to uppercase characters   |
| `toLowerCase()`  | Changes string to lowercase characters  |
| `charAt()`  | Takes an index number as a parameter, and returns the character found at that position  |
| `indexOf()`  | Returns index number of the first time a character or set of characters is found within the string  |
| `lastIndexOf()`  | Returns index number of the last time a character or set of characters is found within the string  |
| `substring()`  | Returns characters found between two index numbers where the character for the first index number is included and the character for the last index number is not included  |
| `split()`  | When a character is specified, it splits the string each time it is found, then stores each individual part ih an array  |
| `trim()`  |Removes whitespace from start and end of string   |
| `replace()`  |Like find and replace, it takes one value that should be found, and another to replace it (by default, it only replaces the first match it finds)   |

### Global Objects: Math Object

The Math object has properties and methods for mathematical constants and functions.

| PROPERTY / METHOD  | DESCRIPTION  |
|---|---|
| `Math.PI` | Returns pi (approximately 3.14159265359)  |
| `Math.round()`  | Rounds number to the nearest integer  |
| `Math.sqrt(n)`  | Returns square root of positive number, e.g., Math.sqrt(9) returns 3  |
| `Math.ceil()` |Rounds number up to the nearest integer   |
| `Math.floor()`  | Rounds number down to the nearest integer  |
| `Math.random()`  | Generates a random number between 0 (inclusive) and 1(not inclusive)  |  

### GlobalObjects: Date Object (and Time)

In order to work with dates, we create an instance of the Data object.  

To create Data object, we can use the `Data()`object constructor. The syntax is the same for creating any object with a constructor function.  

By default, when we create a Data object it will hold today's date and the current time.

| METHOD  | DESCRIPTION  |
|---|---|
| `getDate()`/ `setDate()`  | Returns / sets the day of the month  |
| `getDay()`  | Returns the day of the week (0-6)  |
| `getFullYear()` / `setFullYear()`  | Returns / sets the year (4 digits)  |
| `getHours()`/ `setHours()`  | Returns / sets the hour (0-23)  |
| `getMilliseconds()`/ `setMilliseconds()`  | Returns / sets the milliseconds(0-999)  |
| `getMinutes()`/ `setMinutes()`  | Returns / sets the minutes(0-59)  |
| `getMonth()`/ `setMonth()`  | Returns / sets the month (0-11)  |
| `getSeconds()`/ `setSeconds()`  | Returns / sets the seconds (0-59)  |
| `getTime()` / `setTime()`  |Number of milliseconds since January 1, 1970, 00:00:00 UTC (coordinated Universal Time) and a negative number for any time before  |
| `getTimezoneOffset()`  |Returns time zone offset in mins for locale   |
| `toDateString()` | Returns "date" as a human-readable string  |
| `toTimeString()`  | Returns "time" as a human-readable string  |
| `toString()`  | Returns astring representing the specified date  |  

### Summary

+ Functions allow you to group a set of related statements together that represent a single task.
+ Functions can take parameters (info required to do their job) and may return a value.
+ An object is a series of variables and functions that represent sth from the world around you. The selection of their describing keys is about whats important to store/define/know/use and use on a webpage.
+ In an object variables are known as properties of the object, functions are known as methods of the object.
+ Web browsers implement objects that represent both the browserwindow and the document loaded into the browser window.
+ JavaScript has several built in objects, such as String, Number, Math, Date. Their properties and methods offer functionality that helps you write scripts. List on page 128ff.
+ Arrays and Objects can be used to create complex data sets and both can contain each other.

## Warm Up

<!DOCTYPE html>
<html>
  <body>
    <div id="content-box"></div>
  </body>
</html>

```javascript
function contentCreator(elementType, content) {
var divElement = document.getElementById('content-box');
var elementTypeElement = document.createElement('elementType');
elementTypeElement.textcontent = content; // textContent = property
}
contentCreator(h2,heading);
```
```javascript
// We declare the contentCreator function with 2 parameters (variables only allowed to be used within this function.)
function contentCreator(elementType, content) {

  // assign the newly created (html) element to the element variable
  var element = document.createElement(elementType);
  // use the 'element' variable, which now has a property called textContent, we set this content using the textContent property
  element.textContent = content;
  // return this new element to whatever code invokes or calls it
  return element;
  
}
// invoke the contentCreator function and assign the return value to the paragraph variable.
var paragraph = contentCreator('p','here is some text');

var divElement = document.getElementById('content-box');
divElement.appenChild(paragraph); // div element puts the paragraph within it
// innerHTML = <p>Here is some text</p>
// textContent = Here is some text
```
## Code Review

### Problem Domain
- Getting a random number to represent cookies sold at each hour
  - that number is within some range of values. 
    - Minimum number of customers per hour
    - Maximum number of customers per hour
        - Randomly generate a number of customers between these values. 
    - Average number of cookies each customer buys.
      - multiply the number above by this number (average number of customers)
    - We need to do this same thing for every hour that a store is open. 

 

```javascript

var hours = ['6am', '7am', '8am', '9am', '10am'];
// if I know all the hours, we can , for each hour, perform some logic. 
var seattle - {
  minCust: 10,
  maxCust: 15,
  avgCookies: 3,
  findCookiesPerHour: function() { // this is an anonymous function (it doesn't get (or rather require) a function name);
    // how do I get a random number between 10, and 15
    // we subtract the min from the max to get our middle point
    // if we use a middle point instead of the absolute maximum, we might overshoot our max value when we add the minimum
    // we add the min so that if zero we get our min value
    var randomCustomers = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust; // nick's example underscore NOT REQUIRED. it's just a variable name.
// Math.floor(Math.random * SOME_NUMBER)
var randomCookies = randomCustomers * this.avgCookies;
return randomCookies;

  }
}
for (var i = 0; i < hours.length: i ++) {
  var cookies = seattle.findCookiesPerHour();
  seattle.cookiesPerHour.push(cookies);
  // now we can build our list. 
}
function generateCustomer() {
  Math.floor(Math.random() * (this.max_cust - this.min_cust +1)) + this.min_cust;
}
```
- Get some values to append to the list.

## Object Oriented Programming

- We are using objects as a design pattern.
- We use objects as the starting point for programming operations. 
  - All the functions and operations that you could perform, belong to an object. 
  - Before we can call out to properties and methods we have to create an object. 
- It all begins with defining functions that produce objects. 
- Constructors: it's a function that creates an object. 

```javascript
var seattle = {
    // properties and methods go here.

}
// in JS, we mark constructor functions with a capital letter at the beginning.
// by convention, when we define constructors we capitalize them.
function Store(name, hours, minCust) {
  this.name = name;
  this.hours = hours;
  this.minCust = minCust;
  // this.speak = function() {
  //   console.log('hey im seattle');
  // }
};
// this is javascript inheritance
Store.prototype.speak = function() { // the store's prototype "speak" is equal to the function
  console.log("hey Im" + this.name);
}
// we want things defined on the prototype to be shared between all objects created with that constructor.
Store.prototype.hours = ['6am', '7am', '8am'];

var seattle = new Store(); // creating an object using the Store constructor function

console.log(seattle) // {name: 'seattle', hours: ['6am', '7am', '8am']}
functions Store(name, hours);
// calling upon the constructor, and passing values within
var seattle = new Store('Seattle', ['6am', '7am', '8am'], 5); // the new keyword activates constructor powers within this function
// Store.name => this doesn't exist
seattle.name // => 'Seattle'
seattle.speak(); // "i'm putting something on the prototype, putting a method on the object" 

var openHours = ['6am', '7am', '8am'];
var tokyo = new Store('Tokyo',['6am', '7am', '8am', '9am'], 2);

tokyo.name // 'Tokyo'
tokyo.speak();

// Protoype in this context: the set of properties and methods that all objects that are associate with the contructor receive.
// once again, methods are functions inside of an object.
```
## HTML Tables

- Creating rows and columns.
- This requires a very specific composition / hierarchy of elements.
  - There's not really a column element itself, more likes stacks of row
  - Each row is made of data cells, and if one row appears above another in your code, they will stack 

