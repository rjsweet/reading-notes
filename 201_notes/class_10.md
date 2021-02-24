 Read: 10 - JS Debugging

## JS Ch. 10, “Error Handling & Debugging”
* Order of execution matters
* Variables inside of a function are local scope. Global variables can be used anywhere. 
* In Javascript, statements can pile up or **stack**
* Execution Content & Hoisting: Each time a script enters a new execution context, there are two phases of activity:
  1. Prepare: Scope is created; and variables, functions, and arguments are created
  2. Execute: Now it can assign values to variables, reference functions and run their code, execute statements
* Understanding Scope:
  * JS has Lexical Scope - They are linked to the object they were defined within
  * Children can ask the parents for information in their variables, but the parents cannot get variables from their children. 
* See common chrome console errors pg 459-461

The console is your friend!
* Console Methods: .info(), .warn(), .error(), .group(), .groupend(), .table(), .assert()
* Breakpoints - see 'source': You can pause the execution of a script on any line using breakpoints
* Conditional Breakpoints: You can indicate that a breakpoint should be triggered only if a condition that you specify is met
* Debugger Keyword: You can add this to your js for other developers to see in their developer tool. 
* Handling exceptions: try...catch...finally
* `throw new Error('message');`
### Debugging Tips
Here are a selection of practical tips that you can try to use when debugging your script:
* Another Browser
* Add Numbers
* Strip it back
* Explaining the code
* Search
* Code Playground
* validation Tools
### Common Errors
* Go back to basics
* Missed / extra characters
* Data Type issues
# Class notes

## CSS 
 - Flex vs float
 
## Class notes


* Hoisting: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
  - 
* Scope: What level of the code.
    - Global: 
    - Local/function: 
    -variable shadowing

    var and let use different scopes.  let and const are block scoped. 
    Main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
    While variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared:
    let variables are not initialized until their definition is evaluated. Accessing them before the initialization results in a ReferenceError. Variable said to be in "temporal dead zone" from the start of the block until the initialization is processed.

Creating global object property
At the top level, let, unlike var, does not create a property on the global object:

var foo = "Foo";  // globally scoped
let bar = "Bar"; // globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined
Redeclaration
In strict mode, var will let you re-declare the same variable in the same scope while let raises a SyntaxError.