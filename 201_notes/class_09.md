# Class 09: Html Events and Event Handling

# HTML Forms and JS Events (page 145-172)

## HTML Forms / Form Controls

## Form Structure 

Form controls live inside a `<form>` element. This element should always carry the **action** attribute and will usually have a method and id attribute too.  

Every `<form>`element requires an `<action="http.....php>` attribute. Its value is the URL for the page on the server that will receive the information in the form when it submitted.  

Forms can be sent using one of two methods: **get** or **post**.

1. Get Method
+ values from the form are added to the end of the URL specified in the action attribute.
+ ideal for short forms (such as search boxes)
2. Post Method
+ values are sent in what are known as HTTP headers
+ need to be used if form allows users to upload a file / contains sensitive data

The `<input>` element is used to create several different form controls. The value of the type attribute determines what kind of input they will be creating.

Value of `name` attribute identifies the form control and is sent along with the information users enter to the server.

1. Text Input (single line)
used for a single line of text such as email address and username
2. Password input
like a single line text box but it masks the characters entered
3. Text Area (multi-line)
used for longer areas such as messages and comments

+ `<form action="thhp.....php" method="get    OR    post">` get is for short querries/input post for more data; id attribute for both styling and js;
+ `<input type="text" name="username">`
+ `<input type="password" name="password" maxlength="30">` means the input is hidden
+ `<input type="textarea" name="comments" cols="20" rows="4"> Enter Your comment </textarea>`


### Making Choices

1. Radio buttons
used when a user must select one of a number of options
+ `<input type="radio" name="genre" value="rock" checked="checked"> Rock` means radio butto on current selection;
+ `<input type="radio" name="genre" value="pop"> Pop`
+ `<input type="radio" name="genre" value="jazz"> Jazz`

```html
<form action="........php" method="get    OR    post">
  <input name="delivery_option" type="radio" value="pickup" />
  <input name="delivery_option" type="radio" value="delivery" />
</form>
```


2. Checkboxes
used to select and unselect one or more options
+ `<input type="checkbox" name="service" value="itunes" checked="checked"> iTunes`means checkmark on current selection;
+ `<input type="checkbox" name="service" value="lastfm"> Last.fm`
+ `<input type="checkbox" name="service" value="spotify"> Spotify`
3. Drop-down boxes
used when a user must pick one of a number of options from a list

```HTML
<form action="........php" method="get    OR    post">
  <select name="devices">
    <option value="ipod">IPoD</option>
    <option value="radio">Radio</option>
    <option value="computer">Computer</option>
  </select>
</form>
```

### Submitting Forms
1. Submit buttons 
+ used to submit data from form to another webpage
2. Image buttons
+ similar to submit buttons but they allow to use an image
3. Uploading files
+ allows user to upload files to a website

## Form Structure 

Form controls live inside a `<form>` element. This element should always carry the **action** attribute and will usually have a method and id attribute too.  

Every `<form>`element requires an action attribute. Its value is the URL for the page on the server that will receive the information in the form when it submitted.  

Forms can be sent using one of two methods: **get** or **post**.

1. Get Method
+ values from the form are added to the end of the URL specified in the action attribute.
+ ideal for short forms (such as search boxes)
2. Post Method
+ values are sent in what are known as HTTP headers
+ need to be used if form allows users to upload a file / contains sensitive data

The `<input>` element is used to create several different form controls. The value of the type attribute determines what kind of input they will be creating.

Value of `name` attribute identifies the form control and is sent along with the information users enter to the server.

```html
<input type="submit"> elements can have a type attribute set to submit, by adding type="submit". With this attribute included, a submit button will be rendered and, by default, will submit the <form> and execute its action.
<form action = "http....php">
<input type = "submit" name = "subscribe" value = "Subscribe" />
</form>
``` 

## List / Tables Styling CSS

Properties for LISTS:

1. `list-style-type`
+ allows to control the shape or style of a bullet point
+ can be used on rules that apply to the `<ol>`, `<ul>`, and `<li>` elements.
+ UL values (`disc`, `circle`, `square`) / OL values (`decimal-leading-zero`, `lower-alpha`, `lower-roman`)
+ ***NONE !!!!!***
2. `list-style-image`
+ can be used to specify an image to act as a bullet''
+ `list-style-image: url("picture.png")`
3. `list-style-position` : **outside** or **inside**
+ indicates whether the marker should appear on the inside or the outside of the box
4. `list-style`
+ shorthand property to style, image and position
+ `list-style: inside circle;`

Properies for TABLES:

1. `width`
+ setting the width of the table
2. `padding`
+ setting the space between the border of each table cell and its content
3. `text-transform`
+ converting the content of the table to uppercase
4. `letter-spacing`, `font-size`
5. `border-top`, `border-bottom`
6. `text-align` 
7. `background-color`
8. `:hover`
9. `empty-cells`
+ using to specify empty cells borders (show, hide, inherit)
10. `border-spacing: 5px 15px;`
+ allows to control the distance between adjacent cells
11. `border-collapse`
+ collapsed into a single border where possible

## JavaScript Events 

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box.  

In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it — this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. For example:

- The user selects a certain element or hovers the cursor over a certain element.
- The user chooses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or finishes.
- An error occurs.

```html
<button>Change color</button>
``` 

```javascript
//storing a reference to the button inside a variable called btn, using the Document.querySelector() function. Defining a function that returns a random number. 
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

//code generates a random RGB color and sets the <body> background-color equal to it.
``` 
Event Types :

| Events  | Description  |
|---|---|
| load  | web page has finished loading  |
| error  | browser encounters JavaScript error  |
| click  | user presses and releases a button over the same element  |
| dblclick  | user presses and releases a button twice over the same element  |
| mousemove  | user moves the mouse  |
| mpouseover  | user moves the mouse over an element  |
| input  | Value in any `<input>` or `<textarea>` element has changed or any element with the contented i table attribute  |
| change  | Value in select box, checkbox, or radio button changes  |
| submit  | User submits a form (using a button or a key)  |
| select  | User selects some text in a form field  |
| copy  | User copies content from a form field  |
| paste  | User pastes content into a form field |

## Warm Up

```javascript

/**
 * Using two for loops nested together, write some javascript that will print into the console this pattern:
 
     *
     ** 
     ***
     ****
     *****
 
 * Use any data structures or functions that you'd like
**/

```

## Wireframe Review

## HTML Events

- When we do things in the browser
  - hovering over element
  - pressing a key on the keyboard
  - clicking
    - mouse down + mouseup.
    - the brower is aware that this happens.
    - as developers we have the power to call functions, toggle classes, run any js when these occur
- Forms are the most prevelent element to get interactions from the user and we need to learn how to handle all the events that occur around form inputs. 

## notes to self

- look up git upstream options


