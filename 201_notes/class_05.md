# Class 05 Reading notes

# Read: 05 - HTML Images; CSS Color & Text
## Chapter 5: “Images” (pp.94-125)

* best practice is to create image folders for your projects.
```HTML
<img src="url or relative file" alt="alternative text" title="tite"/>
 ```
 You can add height and width to images too in the HTML code. 

 For placement, you can put images (1) before a paragraph, (2) inside the start of a paragraph. (3) in the middle of a paragraph. **Block** elements always appear on a new line. Inline elements sit within a block level element and do not start on a new line. 
 
 **Old code** used to use the attribute 'align' within the HTML tags and would define this as either left, right, top, middle, bottom. 

 Three Rules for creating images
 1. Save images in the right format
 1. Save images at the right size
 1. Measure images in pixels

 Online Editors: [Photoshop](www.photoshop.com), [pixlr](www.pixlr.com), [splashup](www.splashup.com), [ipiccy](www.ipiccy.com)

 * JPEG: Use when you have many different colors in a picture
 * GIF: Use when a picture has an area that is filled with exactly the same color i.e. flat color. Logos, illustrations, and diagrams. 

 **Dimensions**
 Image should be saved at the same W x H that you want them to appear on the page. If you have to resize, make sure you don't lose valuable information when you crop the image. 

 Unique types of images: vector images, animated gifs, transparency png, 

Contain your image tag in `<figure>` tags. If you want a caption for your image, add the `<figcaption>` tag.

## Chapter 11: “Color” (pp.246-263)
* Foreground color: RGB Values, Hex Code, and Color Names. leaving yourself comments can help you in your CSS code. 
* Background color: All HTML elements live in a box, and you can adjust the background color of the box to make elements pop. 
* When picking foreground and background colors consider the contrast between them. Make sure text is readable
* Opacity: value is a number between 0.0-1.0. Introduced with rgba. the 'a' stands for alpha. Some browsers don't recognize rgba, so be sure to set a fallback of rgb. 

**HSL & HSLA**
* **Hue**: 0-360
* **Saturation**: %
* **Lightness**: 0% white, 50% normal, 100% black
* **Alpha**: 0-1. Represents transparency.  
* Always set a default of rgb for older browsers. 

## Chapter 12: “Text” (pp.264-299)
* Typeface terminology:
  * Serif: extra details on the ends of the main strokes of the letters. Used for long passages of text
  * Sans-serif: straight ends to letters. Good for small text
  * Monospace: All letters in monospacing are the same width. Good for coding.
  * Cursive: joining strokes or a handwriting style
  * Fantasy: decorative fonts 

* Weight: light, medium, bold, black
* Style: normal, italic, oblique
* Stretch: condensed, regular, extended

When choosing a typeface, know that it will only be displayed if it's installed on that user's computer. Browsers are supposed to support at least one of the typefaces above. Usually you should add a generic font name after your preferred choice of typefaces a la **font stack**

**Font Specifications**
* font-family: specifies typeface. Font families with more than one word should be put in double quotes. List multiple font options for browsers. Limit your page to 3 typefaces.  
* font-size: specified in pixels, percentages, or ems. 16px is default for browsers. 
  * pixels: very precise
  * percentages: browsers default to 16px, so the % method sets 16px to 100%. This rule builds on itself with the children elements
  * ems: an em is equivalent to the width of a letter 'm'.

@font-face allows you to use a font even if it's not on the users computer. Open source fonts: [Font Squirrel](www.fontsquirrel.com) | [fontex](www.fontex.org) | [Open Font Library](www.openfontlibrary.org) | [Type Kit](www.typekit.com) | [Kernext](www.kernext.com) | [Fontspring](www.fontspring.com)
```CSS
@font-face {
  font-family: 'ChunkFiveRegular';
  src: url('fonts/chunkfive.eot');}
}
h1, h2 {
  font-family: ChunkFiveRegular, Georgia, serif;}
}
```
**Font Specifications continued**
* font-weight: normal (default) or bold
* font-style: normal (default), italic, oblique
* text-transform: uppercase, lowercase, capitalize
* text-decoration: none, underline, overline, line-through, blink
* line-height: known as leading, the vertical space between lines of text. Start with 1.4-1.5ems. 
* letter-spacing, word-spacing: Kerning is the term typographers use for the space between each letter. You can also control the space between words. Good to increase kern when your headings are all uppercase. Default space between words is 0.25ems. 
* text-align:left, right, center, justify (every line should take up the full width of the container box)
* vertical-align: usually used with inline elements such as img, em, or strong elements. Values include baseline, sub, super, top, text-top, middle, bottom, text-bottom
* text-indent: indents first line of text in px or ems. 
* text-shadow: used for drop shadows. Takes 3 lengths and a color for the drop shadow. 
* :first-letter, :first-line = specified at the end of a selector
```CSS
p.intro:first-letter {
  font-size: 200%;
}
```
* :link, :visited= blue by default
```CSS
a:link {
  color: deeppink;
  text-decoration: none;
}
```
* :hover, :active, :focus = all you to change the appearance of elements when a user is interacting with them. 



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


