# Class 02/ Day 2 notes

# Reading 

-HTML
  -Chapter 2:"Text" (40-61)
  -Chapter 10: "Introducing CSS" (226-245)
-JS
  -Chapter 2: "Basic JavaScript Instructions" (53-84)
  -Chapter 4: "Decisions and Loops" *only up to the section on switch statements* (145-162)






## Warmup
create a set of bash terminal commands that will create the following folders and files

.
|
| - folder1
|     | - folder_1_file1.html
|     | - folder_1_file2.html
| - folder2
|     | - folder_2_file1.html
|     | - folder_3
|     |     | - folder_3_file1.html
| - file_0.md


`mkdir folder1` -> creates a folder in our current terminal directory called "folder1"

`cd folder1` -> moves into folder1

`touch folder_1_file1.html` -> create the file in the directory we just moved into.

`mkdir folder1 &&  cd

`touch folder1/folder_1_file1.html` assumes folder already exists, allows creation of file inside of designated folder. creates the file at the specific path

`rm -rf folder_name` -> removes a folder from our current terminal/ folder/directory

Let's say our terminal is in folder 3 `touch ../../folder_1_file3.html`

- Learning Journals opened up today. 

## Code Review

- A single html file, with some html, CSS and JavaScript.

## Git command review

git add

git commit

git push

- for labs we need to do this:
  -1) Create a repo for a project on github
    -this creates a file folder (for the project?) that we eventually will add files to our machine
  -2) Clone from github to our machine, the repo we just made
    - git clone (url here)
  -3) cd into project directory, and do our work
      `git status`  to check on what things git is tracking, what git has saved
  -4) When we are ready to save our work
    `git add`
    `git commit`
    `git push`
  ~ side note look up "git checkout"

- We can (emphasis 'can' this process is entirely optional) still do this starting from
  -0) Create a folder for project files / git directory
    - `mkdir project_name`
    - `cd project_name`
  -1) Initialize your current directory as a git repository
    -`git init`
  -3) Create a Repo on Github
    -copy the url from github
  -4) Add that repo as a remote
    - `git remote add origin <url.git>` Note: angled brackets not required. it'll be the standard url format https://yourwebsitehere.com 
  -5) Now we can push our code to the github repo we created.

## Javascript Data Types

- There are five immutable data types in Javascript.
  - Strings
    - `var string = 'natural language characters such as Here are words'`
    - `var anotherString = "more words"`
  - Numbers
    - `var number = 10`
    - `var decimal = 10.2`
    - `var decimal = 1/2`

  'I ama String' + 10 => 'I am a String 10'
    parseInt('10') Javascript command

  -Booleans
   - True
   - False
   - `var isBoolean = true`
   - `var isNotBoolean = false`
   
    - null
    - undefined


  



-Question for thought, how do you determine the data "weight" of a variable. Or how much memory a variable is taking up. 
  -a String takes up as many bytes as there are characters in it. 

## Conditional Statements
  -if / else / if else
  - flow control
    - what lines of code are going to be run in our js engine

```javascript

// these statements always evaluate to a boolean

  if (true) {
    console.log('This statement wil run);
  } else {
    console.log('this statement will not run');
  }

// == this is a way to evaluate 2 sides of a statement

  var aBigNumber = 1000
   if (0 == 1) {
     console.log('this will never be true');
   }
   if (aBigNumber == 1000) {
     console.log('this should run just fine')
   }

   var UsersNumber = prompt ('Guess a number'); // in JS functions return specific data types

   typeof(UsersNumber) // returns the data type of whatever is in the paranthesis

   if (UsersNumber == 1000) {
     console.log('You guessed correctly');
   } else {
     console.log('not quite');
   }

   if (UsersNumber != 1000) {
     console.log('not quite');
   }

 // guessing

   if (UsersNumber !== 1000) {
     console.log('not quite');
   }

// There is a weak and a strong evaluation in js

if (UsersNumber === 1000) {
  console.log('You guessed correctly');
}

// switch statements

// lets you define a large amount of conditions to evaluate

var NumofGuesses = 12;

switch (NumOfGuesses)  {

// these always check for exact matches
  case 10:
    console.log('the number is 10');
    // if we don't want cases below the catches case to execute, we need a break
    break;
  case 11:
    console.log('the number is 11');
    break;
  case 12:
    console.log('the number is 12');
    break;
  case 13:
    console.log('the number is 13');
    break;
  default:
    console.log('the number didn/'t equal any of the above');
}

```
- Arrays
  - Let you store more than one piece of data in the same spot. 

`var arrayOfNumbers = [2,4,6,8,9.10]`

  - We reference the discreet items (positions in the data) in the array with an index number
    - `arrayOfNumbers[0] ==> 2`
    - `arrayofNumbers[5] ==> 10`
