# Class 06: JS Objects and the DOM (Document Object Model)

### What is an object?
Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and functions take on new names.

##### In an Object: Variables become known as properties

If a variable is part of an object, it is calles ***property.*** Properties tell us about the object, such as the name of a hotel or the number of rooms it has.

##### In an Object: Functions become known as methods

If a function is part of an object, it is called a method. Methods represent tasks that are associated with the object. For example, you can check how many rooms are available by subtracting the number of booked rooms from the total number of rooms.
like variables and named functions, properties and methods have a name and a value. In an object that value is called a key; cannot have two keys with the same name; the value of a property can be a string, number, boolean, array or even another object;

##### Creating an object in literal notation;
note the object is the curly braces and their content; separate each key from its value with a colon; separate each property and method with a comma;

```
Creating an Object
var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
```

#### Accessing an Object and Dot notation
To access a property or method of an object you use the name of the object, followed by a period, then the name of the property or method. This is known as dot notation.

Also we can access the properties or methods of an object using square bracket syntax.

##### Dot notation
```
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
```
##### Square bracket syntax
```
var hotelName = hotel['name'];
var roomsFree = hotel['checkAvailability']();
```
Square bracket syntax is most commonly used when:
+ The name of the property or method contains special characters (such as a dash)
+ The name of the property is a number (technically allowed, but should generally be avoided)
+ A variable is being used in place of the property name.

### Chapter 5: “Document Object Model” (pp.183-242)
#### Document Object Model (DOM)
The Document Object Model specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

The DOM is neither part of HTML, nor part of JavaScript; it is a separate set of rules. It is implemented by all major browser makers, and covers two primary areas:

##### Making a Model of the HTML Page
When the browser loads a web page, it creates a model of the page in memory.

The DOM specifies the way in which the browser should structure this model using a DOM tree.
The DOM is called an object model because the model (the DOM tree) is made of objects.

Each object represents a different part of the page loaded in the browser window.

##### Accessing and changing the HTML Page
The DOM also defines methods and properties to access and update each object in this model, which in turn updates what the user sees in the browser.

Body of HTML Page
```HTML
<html>
  <body>
    <div id = "page">
      <h1 id ='header'>List</h1>
      <h2>Buy groceries</h2>
      <ul>
        <li id = "one" class = "hot"><em>fresh</em> figs</li>
        <li id = "two" class = "hot">pine nuts</li>
        <li id = "three" class = "hot">honey</li>
        <li id = "four">balsamic vinegar</li>
      </ul>
      <script src = "js/list.js"></script>
    </div>
  </body>
</html>
```
DOM Tree

As a browser loads a web page, it creates a model of that page. The model is called a DOM tree, and it is stored in the browsers' memory. It consists of four main types of nodes.

#### The Document Node
Every element, attribute, and piece of text in the HTML is represented by its own DOM node. At the top of the tree a document node is added; it represents the entire page.
When you access any element, attribute, or text node, you navigate to it via the document node. It is the starting point for all visits to the DOM tree.
#### Element Nodes
HTML elements describe the structure of an HTML page. The ```<h1> - <h6>``` elements describe what parts are headings; the ```<p>``` tags indicate where paragraphs of text start and finish; and so on.
To access the DOM tree, you start by looking for elements. Once you find the element you want, then you can access its text and attribute nodes if you want to. This is why you start by learning methods that allow you to access element nodes, before learning to access and alter text or attributes.
#### Attribute Nodes
The opening tags of HTML elements can carry attributes and these are represented by attribute nodes in the DOM tree.
Attribute nodes are not children of the element thar carries them; they are part of that element. Once you access an element, there are specific JavaScript methods and properties to read or change that element's attributes. For example, it is common to change the values of cl ass attributes to trigger new CSS rules that affect their presentation.
#### Text Nodes
Once you have accessed an element node, you can then reach the text within that element. This is stored in its own text node.
Text nodes cannot have children. If an element contains text and another child element, the child element is not a child of the text node but rather a child of the containing element. (See the <em> element on the first <li> item.) This illustrates how the text node is always a new branch of the DOM tree, and no further branches come off of it.
#### Working with the DOM tree
Accessing and updating the DOM tree involves two steps:

Locate the node that represents the element you want to work with.
Use its text content, child elements, and attributes

### Step 1: Access The Elements
#### Select an individual element node
```Javascript
+ getElementById('id')- uses the value of an element's id attribute (which should be unique within the page)
+ querySelector('css selector') - uses CSS selector, and returns the first matching element
#### Select multiple elements (Nodelists)
+ getElementsByClassName('class')- selects all elements that have a specific value for their class attribute
+ getElementsByTagName('tagName') - selects all elements that have the specified tag name
+ querySelectorAll('css selector')- uses a CSS selector to select all matching elements.
```
#### Traversing between Element Nodes
```
+ parentNode- selects the parent of the current element node (which will return just one element)
+ previousSibling / nextSibling - selects the previous or next sibling from the DOM tree
+ firstChild/ lastChild - select the first or last child of the current element.
```
### Step 2: Work with those Elements
#### Access / Update text Nodes
+ nodeValue- this property lets you access or update contents of a text node
#### Work with HTML Content
+ innerHTML- allows access to child elements and text content
+ textContent- allows access just to the text content
+ createElement(), createTextNode(), appendChild()/removeChild()- let you create new nodes, add nodes an dremove nodes froma tree.
#### Access or update Attribute Values
+ hasAttribute()- checks if an attribute
+ getAttribute()- gets its value
+ setAttribute()- updates the value
+ removeAttribute()- removes an attribute

***caching DOM querries:***

methods that find elements in the DOM tree are called DOM querries. When you work w an element > 1 u should use a var to store the results of this querry so the interpreter doent have to search again. You are storing the location of the elements within the DOM tree in a variable. The properties and methods of that element node work on the variable.




var itemOne = getElementById('one');
doesnt store the element but a reference to where that element node is on the DOM tree;
to access the text content of that element, u might use the variable name itemOne.textContent.



### Methods that return a single element node

+ #### selecting elements using ID attributes - getElementById
select the element and store it in a variable; 
var el = document.getElementById('one'); - select the element and store it in a variable;
el.className = 'cool'; - update the value of the class attribute to ="cool";

+ #### selecting elements using querySelector - css selector
returns only the first of matching elements;



### Methods that return one or more elements in a node-list
comes back in a node list like an array - with index number 0-...;
but it is a type of object (type of)  --- called a collection;
--- you can select a specific item out of that node-list;
--- you can loop through the items of the list and change and perform the same statements on each of the element nodes

+ #### selecting elements using class attributes
var elements = document.getElementsByClassName('hot'); // Find hot items
```
if (elements.length > 2) {     // If 3 or more are found
     
     var el = elements[2];     // Select the third one from the Nodelist
     el.className = 'cool';    // Change the value of its class attribute
}
```
+ #### selecting elements by tag name 
```
var elements = document.getElementsByTagName('li');   // Find <li> elements

if (elements.length > 0) {    // If 1 or more are found

 var el = elements[0];      // Select the first one using array syntax
 el.className = 'cool';     // Change the value of the class attribute
}
```
+ #### querrySelectorAll - css selector
use CSS selector syntax to select one or more elements and return all of those that match;


### Looping through a Nodelist
If you want to apply the same code to numerous elements, looping through a Nodelist is a powerful technique.

It involves finding out how many items are in the Nodelist, and then setting a counter to loop through them, one-by-one.
```
var hotItems = document.querySelectorAll('li.hot');  //Store Nodelist in array

if (hotItems.length > 0) {    // If it contains items

  for (var i = 0; i < hotItems.length; i++) {    //Loop through each item
      hotItems[i].className = 'cool';  // Change value of class attribute
  }
}
```

Explanation of an example above: In this example, the Nodelist is generated using querySelectorAll(), and it is looking for any ```<li>``` elements that have a class attribute whose value is hot. The Nodelist is stored in a variable called hotItems, and the number of elements in the list is found using the length property. For each of the elements in the Nodelist, the value of the cl ass attribute is changed to cool .

#### Accessing & Changing a text Node
```
var itemTwo = document.getElementById('two');  //Get second list item
var elText = itemTwo.firstChild.nodeValue;   // Get its content
elText = elText.replace('pine nuts', 'kale');  // Change pine nuts to kale
itemTwo.firstChild.nodeValue = elText;   // Update the list item
```
#### Adding an element to the DOM tree
```
Create a new element and store it in a variable 
var newEl = document.createElement('li');
Create a text node and store it in a variable 
var newText = document.createTextNode('quinoa');
Attach the new text node to the new element 
newEl.appendChild(newText);
Find the position where the new element should be added 
var position = document.getElementsByTagName('ul')[0];
Insert the new element into its position
position.appendChild(newEl);
```
#### Removing an element from DOM tree
```
var removeEl = document.getElementsByTagName('li')[3];  // The element to remove
var containerEl = removeEl.parentNode;   // Its containing element
containerEl.removeChild(removeEl);   // Removing the element
```

## Addressing feedback
  - Freelance work ( a lot less coding, a lot more admin. )
    - spend time looking for work
    - giving proper quotes
    
  - Junior developer roles
    - learning opportunity. 
- More structure to lecture and lab time 
## Notes to self

  - Do a personal calendar of assignments. These alerts on canvas aren't helping enough. 
  - lab time is between 1pm and 6pm. Use it. 
  - select your element you want to change - WINDOWS - CTRL D - selects the next instance of that element


## Lab notes
  - more lines equal clarity, at the minor cost of file size. Ideally you want to be clear as to what you're doing while using only the minimum number of lines. 
  - if someone else is going to be reading your code, be careful with your variable names. 
  - uniary syntax `${}`

## JS Objects
  - Fundamental data structure ( something that holds different types of data; strings, numbers, booleans, nulls and undefined)
  - Objects allow us to place things in a specific place. (it all has an "address" for lack of a better term.)
  `var array = [1, '1', 2];` // how arrays work
  - when we reference items within: array[0];
  `var object = { key: value, }` // 
    - var person = {name: 'Jacob'}
      - this reference method is known as 'dot notation';
      - we can still use bracket notation if we want
      - person ['name'] => 'Jacob'
        -handy when we need to use a variable to represet a property name. 
        - for example, `var propertyName = null`;
          - 
        - `person[propertyName]`;
          - `person.propertyName` => this will give us nothing (undefined);

    - now our reference looks like this: object.key => value;
    - everytime we something like array.length;
  - things we define on an object, are comma seperated.
    - You don't need a comma at the end, but it won't break your code to have one at the end. 
  - if we want to place a function on an object, we call this a method.
  - 'this' => we call this contextual 'this'
    - inside of an object, 'this' refers to the object that is being defined.

  ```javascript
  var person = {
    name: 'Jacob',
    speak: function () {
      console.log('Hey there');
    }
  }

  person.speak();
  
  // prints to the console => 'Hey there';
  person.name;
  ```

## Document Object Model

  - This is a Javascript object that lives globally within the browser. Accessible from the console. 
  - Represents the HTML document that we are currently looking at.
  - It has it's own properties and methods, many of which we will discuss (but not all of the things)
  - We'll use this today to select elements that are on the page, create new elements that are not on the page yet, as well as append those new elements to the document object. 
    - Useful methods:
    -   `getElementByID(); //<= selects an element`
    -   `createElement() // <= creates a new HTML element that is not displayed yet`
    -   `appendChild() // <= places new elements on the page.`
    -   `setAttributes() // <= let us modify elements with styling or classname, or ids`
    -   `textContent <= set the content within open and closing tages`

## Modeling Problem Domains (planning phase?)

- Understanding the scope of the problem and providing a working model of how it can be solved. 
- Demo in the README.md check class repo. 



