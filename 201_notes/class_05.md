# Class 05 Reading notes
 - Concept Review &  Git Branching
## Warm Up 

```javascript

var arrayOfNumbers = [1,10,15,20];
var integer = 5;

function sumThisUp(x, y) {
  for (var i = 0; i < x.length; i++) {
    // if (typeof(arrayThatWeWantToAddTo) !== 'object')
    console.log(x[i] + y);
  }
}
// the function is being used (called or invoked)
sumThisUp(arrayOfNumbers, integer);
var arrayOfNumbers = [1, 10, 15, 20]
var number = 5;

function sumThisUp(array, number) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i] + number);
    }
}

sumThisUp(arrayOfNumbers, number);

/** 
 * Create a function that uses 2 parameters, the first parameter is an array of numbers, and the seconde is a single ineteger number.
 * the function returns that same array, but adds that second parameter to each number within the array. 
 // Parameter: variables that we define within the paranthesis of the functions signature or declaration.
```

## Concept Review

  - Driving vs navigating
    - "typeof" both a function and and "operator"
    - Look up .fill method. possibly a function to fill an empty array. 
    - method- function with the .syntax
    - "constructor" look up definition in javascript; Capital lettter functions? 
    - object

## CSS Selectors

- div > span : span with a parent div. "I want those child spans that belong to a div"
-  div span  : direct sibling (sibling: sits on the same line in the html)

## Git Branching

- ACP has up until now all gone up to `main'
- `git checkout` leave current branch
- `git checkout -b feature-1` this creates and switches our terminal to the new branch `feature-1` that was made. 
    -
- we can work until we finish the goal of our feature.
  - we push to the feature branch `git push origin feature-1`
  - We can now if we chose we can catch main up with a pull request. 
  - alternatively if we want to work on a nother feature, we can run `git checkout -b feature-2`
- Once we're finally done and have tested everything we want to make our pull request to merge it all into main.


