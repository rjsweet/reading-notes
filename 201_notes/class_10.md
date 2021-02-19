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
 