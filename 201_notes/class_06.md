# Class 06: JS Objects and the DOM (Document Object Model)

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



