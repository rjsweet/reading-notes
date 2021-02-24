# Class 11: Audio / Video Component, More User Interaction

# Read: 11 - Assorted Topics

## HTML | Ch.16: “Images” (pp.406-427)

### Image sizing
Commonly used sizes
* Small portraits: 220x360
* Small landscapes: 330x210
* Feature photos: 620x400
* You can give similar sized photos the same CSS class of **small, medium, and large**

### Aligning images with CSS
* The float property is added to the class that was created to represent the size of the images
* Use classes like **align-left** or **align-right** to align the images to the left or the right of the page. 
* It's also common to add a margin to the image to ensure that the text does not touch their edges

### Centering images using CSS
* To center an image, use display: block. Images are inline by default.
* Once it has been made into a block element there are two was to center images:
  1. On the container element, you can use the **text-align** property with a value of center
  1. On the image itself,  you can use the margin property and set the values of the left and right margins to auto. 
  * **You can specify class names that allow any element to be centered, in the same way that you can for the dimensions or alignment of images**

### Background Images `<background-images>`
* By default  background images repeat to fill the entire box 
* Apply background images with the body CSS selector

### Repeating Images `<background-repeat>` `<background-attachment>`
Background images can have 4 properties 
  1. repeat
  1. repeat-x
  1. repeat-y
  1. no-repeat
Background attachment property specifies whether a background image should stay in one position or move as the user scrolls up and down the page
  1. Fixed: image will stay
  1. Scrolled: image will move as the user scrolls up and down
Background shorthand
* background-color, -image, -repeat, -attachment, -position
If you want to have background images, make sure the contrast works with the text

### Background Position `<background-position>`
Use this to specify where in the browser window the background image should be placed.
* left top, left center, left bottom, center top, center center, center bottom, right top, right center, right bottom
* You can use a pair of pixels or percentages. These represent the distance from the top left corner of the browser window (or container). Top left corner is equal to 0%. 

## HTML | Ch.19: “Practical Information” (476-492)
### SEO 
* On-page techniques: Use keywords in the page title, URL/Web address, headings, text, link text, image alt text, page description. Ensure that any images have appropriate text in the value of their alt attributes How to identify keywords:
  * Brainstorm, Organize, Research, Compare, Refine, Map
* Off-page techniques: search engines rank your site by looking at the number of other sites that link to yours. Make your link tags specific rather that 'click here'
* Analytics: 
  * Sign up for google analytics and add it to every page of your site
  * This will save tracking information that you can view in a provided interface
  * The tracking code should appear in the `<head>`
  * This will track: Visits, unique visit, page view, pages per visit, average time on site, data selector, export
  * What are your viewers looking at?:
    * What pages are they on? 
    * Did they come to your site via a landing page? 
    * Top exit page
    * Bounce rate
* Domain names & Hosting: You will need a URL for your site and you will need to set up a server
* FTP: To transfer your code and images from your computer to your hosting company, you will need to use File Transfer Protocol 

## Flash History
Fantastic timeline on page 205
## Feedback from week 2

- How last week went:
  - 
## Concepts Review

 - constructors create javascript objects.
## Web Development Practical Topics
- Web Site Hosting (301 focus on how this works)
  - Where our files go, how do we acess them?
    - In order to access a website on the internet, you need to go to a url that points to a site HOST
      - GoDaddy, NameCheap, squarespace, AWS. 
      - think of this as a directory that lives in the cloud that can accept http requests.
- SEO
  - Search Engine Optimization
  - Is your content listed well, for search engine indexers?
    - Program that is constantly running to see what content exists for keywords and topics. 
- Analytics
## User Interaction Continued. 