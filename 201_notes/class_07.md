# Class 07: Object Oriented Programming


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

```html
<table>
  <tr>
    <td>One</td>
    <td>Two</td>
  </tr>
  <tr>
    <td>Three</td>
    <td>four</td>
  </tr>
</table>
```