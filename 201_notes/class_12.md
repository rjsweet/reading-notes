# Class 12: Third Party Libraries and Chart JS

# Read: 12 - Docs for the HTML `<canvas>` Element & Chart.js

[Chart.js API.](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
[Chart.js docs:](https://www.chartjs.org/docs/latest/)
[Basic usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
[Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
[Applying styles and colors](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
[Drawing text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

## Basic usage
Common syntax for canvas HTML element
```HTML
<canvas id="tutorial" width="150" height="150"></canvas>
```
Two attributes: width & height
* These are both optional and can also be set using DOM properties. 
* Defaults to 300px wide and 150px high
* Defaults to transparent background
* Provide fallback content for canvas tags: insert the alternate content inside the `<canvas>` element
* If fallback content is not needed, a simple `<canvas id="foo" ...></canvas>` is fully compatible with all browsers that support canvas at all.
* The `<canvas>` element has a method called `getContext()`. You can specify 2D
```Javascript
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```
This script checks for support
```Javascript
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```
This is a skeleton template 
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    <style type="text/css">
      canvas { border: 1px solid black; }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

## Drawing shapes with canvas
This is how you draw items with canvas
* Coordinate space: canvas grid, starts at top left corner at coordinates (0,0). Elements are place relative to the origin
* Canvas supports **rectangles** and **paths**
  * Path: list of points, connected by segments of lines that can be of
```javascript
fillRect(x, y, width, height)
//Draws a filled rectangle.
strokeRect(x, y, width, height)
//Draws a rectangular outline.
clearRect(x, y, width, height)
//Clears the specified rectangular area, making it fully transparent.
//Rectangle shape example

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```
### Path Methods
* `beginPath()` Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
  * `closePath()` Adds a straight line to the path, going to the start of the current sub-path.
  * `stroke()` Draws the shape by stroking its outline.
  * `fill()` Draws a solid shape by filling the path's content area.

Drawing a triangle
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```
### Moving the Pen
* `moveTo(x, y)` Moves the pen to the coordinates specified by x and y.
Draws Smiley Face
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
}
```
### Lines
* `lineTo(x, y)` Draws a line from the current drawing position to the position specified by x and y.
Draws 2 triangles
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```
* Shapes are automatically closed when a path is **filled**, but not when they are **stroked**.

### Arcs
* `arc(x, y, radius, startAngle, endAngle, anticlockwise)` Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).
* `arcTo(x1, y1, x2, y2, radius)` Draws an arc with the given control points and radius, connected to the previous point by a straight line.
* **Note**: Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression: `radians = (Math.PI/180)*degrees`
* Use a for loop to loop through the columns of an arc

### Bezier and quadratic curves
* `quadraticCurveTo(cp1x, cp1y, x, y)`Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.
* `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)` Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).
### Rectangles
* `rect(x, y, width, height)` Draws a rectangle whose top-left corner is specified by (x, y) with the specified width and height.
### Making combinations
* There's no limitation to the number or types of paths you can use to create a shape.
### Path2D objects
* `Path2D()` returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.

## Applying styles and colors
### Colors
* `fillStyle = color` Sets the style used when filling shapes.
* `strokeStyle = color` Sets the style for shapes' outlines.
* `globalAlpha = transparencyValue` Applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (fully transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.
### Lines
* `lineCap = type` Sets the appearance of the ends of lines.
* `lineJoin = type` Sets the appearance of the "corners" where lines meet.
* `miterLimit = value`Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
* `getLineDash()` Returns the current line dash pattern array containing an even number of non-negative numbers.
* `setLineDash(segments)` Sets the current line dash pattern.
* `lineDashOffset = value` Specifies where to start a dash array on a line.
* The lineCap property determines how the end points of every line are drawn. 
  * butt: The ends of lines are squared off at the endpoints.
  * round: The ends of lines are rounded.
  * square: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.
* The lineJoin property determines how two connecting segments with non-zero lengths in a shape are joined together:
  * round: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to half the line width.
  * bevel: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
  * miter: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is effected by the miterLimit property which is explained below.
* setLineDash:  accepts a list of numbers that specifies distances to alternately draw a line and a gap 
* lineDashOffset: sets an offset where to start the pattern.
### Gradients
* `createLinearGradient(x1, y1, x2, y2)`Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
* `createRadialGradient(x1, y1, r1, x2, y2, r2)`Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.
* `gradient.addColorStop(position, color)` Creates a new color stop on the gradient object. The position is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the color argument must be a string representing a CSS <color>, indicating the color the gradient should reach at that offset into the transition.
### Patterns
* `createPattern(image, type)`Creates and returns a new canvas pattern object. image is a CanvasImageSource (that is, an HTMLImageElement, another canvas, a <video> element, or the like. type is a string indicating how to use the image.
  * repeat: Tiles the image in both vertical and horizontal directions.
  * repeat-x: Tiles the image horizontally but not vertically.
  * repeat-y: Tiles the image vertically but not horizontally.
  * no-repeat: Doesn't tile the image. It's used only once.
### Shadows
* `shadowOffsetX = float` Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
* `shadowOffsetY = float`Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
* `shadowBlur = float` Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
* `shadowColor = color` A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

## Drawing text
* `fillText(text, x, y [, maxWidth])`Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
* `strokeText(text, x, y [, maxWidth])`Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
* `font = value` The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
* `textAlign = value`Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
* `textBaseline = value`Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
* `direction = value`Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.
## Code Review

- What went well?
  -
- What was really hard?
  - using .includes for matching goat objects  to image elements
  - difficult to ensure that new (fresh) images on the page
  - keeping track of variable names
  - today ws a big blob of features and requirements
  - removing event listener
  - dead end trying to implement new things
    - src attribute
    - leaving it empty and populate it with the dom.
    - .includes method.