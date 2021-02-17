# Class 08: CSS Wireframing

# Read: 08 - More CSS Layout

## HTML book | Ch.15 “Layout” 
Key concepts:
* CSS treats each HTML item like a box
* There are block-level boxes and inline boxes
* It can be helpful to put grouped items into `<divs>`

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

### Screen Size
* iPhone4: 960x640
* iPad 2: 1024x768
* 13" MacBook: 1280x800
* 27" iMac: 2560x1440
* Web designers often create pages 960-1000px wide

### Layouts: adjusted in `<body>` tag
* Fixed Width: Do not change size as the user increases or decreases the size of their browser window. Stay the same width no matter what size the browser window is. Use pixel size.
* Liquid: stretch and contract as the user increases or decreases the size of their browser window. Stretches or shrinks to fit the screen. Use percentage. 

## Warmup

- create a constructor for a pokeman.

## Code review

- See "review" folder in class repo
- term to look up "object literal"
- prototype for constructors: what is it, what does it really do?
