Read: 14a - CSS Transforms, Transitions, and Animations


what-google-learned-from-its-quest-to-build-the-perfect-team.html)
* [Read this article on CSS Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
* [Read this article on CSS Transitions & Animations](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)
* [8 simple CSS3 transitions that will wow your users](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/)
* [6 Buttons animated](https://codepen.io/retyui/pen/ByoaXV)
* [CSS3 Animations: Keyframes](https://codepen.io/akshaychauhan/pen/oAfae)
* [404](https://codepen.io/kieranfivestars/pen/MYdQxX)
* [Pure CSS Bounce Animation](https://codepen.io/dp_lewis/pen/gCfBv)

 

## CSS Transforms
* Browser support isn't great for Transform just yet
Syntax
```CSS
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```
Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane. 
* 2D plane:
  * Rotate: provides the ability to rotate an element from 0 to 360 degrees.
  * Scale: allows you to change the appeared size of an element.
  * Translate: works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document
  * Skew: Used to distort elements on the horizontal axis, vertical axis, or both
  * Transform Origin: The default transform origin is the dead center of an element, both 50% horizontally and 50% vertically. To change this default origin position the transform-origin property may be used.
  * Perspective: In order for three-dimensional transforms to work the elements need a perspective from which to transform. The perspective for each element can be thought of as a vanishing point, similar to that which can be seen in three-dimensional drawings.
* 3D plane:
  * Rotate: With three-dimensional transforms we can rotate an element around any axes.
  * Scale: By using the scaleZ three-dimensional transform elements may be scaled on the z axis. 
  * Translate: Elements may also be translated on the z axis using the translateZ value.
  * Skew: Skew is the one two-dimensional transform that cannot be transformed on a three-dimensional scale
  * Transform Style: To allow nested elements to transform in their own three-dimensional plane use the transform-style property with the preserve-3d value. Needs to be placed on the parent element above the nested transforms. 
  * Backface Visibility: if you prefer not to see these elements at all, set the backface-visibility property to hidden

## CSS Transitions & Animations
With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.
* The easiest way for determining styles for different states is by using the `:hover, :focus, :active, and :target pseudo-classes`.
### Four Transition related properties
1. transition-property: Determines exactly what properties will be altered in conjunction with the other transitional properties. Not all properties may be transitioned. The display property, for example, may not be transitioned as it does not have any midpoint. Colors & fonts can be transitioned. 
1. transition-duration: The duration in which a transition takes place 
1. transition-timing-function: Sets the speed in which a transition will move `linear, ease-in, ease-out, and ease-in-out.`
1. transition-delay: sets a delay to your transition
Shorthands
* Using the transition value alone, you can set every transition value in the order of transition-property, transition-duration, transition-timing-function, and lastly transition-delay. 
* Do not use commas with these values unless you are identifying numerous transitions.
```CSS
.box {
  transition: background .2s linear, border-radius 1s ease-in 1s;
}
```
### Animations Keyframes
* @keyframes rule. The @keyframes rule must be vendor prefixed, just like all of the other transition and animation properties:
  * `@-moz-keyframes`
  * `@-o-keyframes`
  * `@-webkit-keyframes`
* They include a duration, timing function, and delay if desired
  * `animation-timing-function`
  * `animation-delay`
* animation-iteration-count: integer or `infinite`
* animation-direction property: `normal, reverse, alternate, and alternate-reverse`
* animation-play-state: `running and paused`
* animation-fill-mode property identifies how an element should be styled either before, after, or before and after an animation is run: `none, forwards, backwards, and both.`
* Shorthands for animation go in this order: `animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and lastly animation-play-state.`

## 8 simple CSS3 transitions that will wow your users
1. Fade in: It’s a great way to emphasize functionality or draw attention to a call to action
1. Change color
1. Grow & Shrink
1. Rotate elements
1. Square to circle
1. 3D shadow
1. Swing: This animation simply moves the element left and right
1. Inset border: great for buttons

## 6 Buttons animated
* It looks like with many animations you have to import them into your CSS
* Have yet to use @ in my CSS: @import, @-webkit-keyframes, & @keyframes

## CSS3 Animations: Keyframes
* First time I've seen the use of widgets in JavaScript via WhWidgetSendButton
* -webkit-animation-timing-function: ease-out or ease-in

## 404
* This is a fantastic reference tool for text animation
* I also now understand the use case of `:nth-of-type` thanks to `h1:nth-of-type(1), h1:nth-of-type(2), h1:nth-of-type(3)` that were written in the CSS

## Pure CSS Bounce Animation 
* Tool that uses @keyframe to create animation with shapes. Helpful to know these property names such as scalemask, infinite, balltransform, ballbounce

- an object literal is not quite the same thing as an object from a constructor.
  - if there is anything associated with the prototype we need to "reinstantiate"