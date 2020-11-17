
`python3 -m http.server`



# Donut Forget Pairs Game

Donut forget is a Pairs game for a single player. 

## UX

### User Stories
As a user I would like:
* To be challenged!
* To play a game that is visually appealing. 
* To play a game that really challenges my memory. 
* To play a game to pass time enjoyably. 
* To feel a bit under stress with a time counter. 
* To feel excited to finish the game as soon as I can, and play again to finish even faster. 


### Design

Wireframes
The website was initially designed using Balsamiq to create several wireframes (link below). 
[Wireframes](assets/images/Wireframe.png) 


### Typography

I have used 2 Google fonts in designing this game. "Sacramento", cursive has been used for headings and "Open Sans", sans-serif has been used for paragraphs. These fonts complement each other very well by the pairings in Google fonts.  

### Colours

* Pink - is used for backgrounds and modals. 
* Black – all typography.
* Apricot – is used for a thin border on the start modal.


## Features

### Existing Features
* Home page:
    * Animated text and main menu, and Simpsons theme tune music
    * Main menu with links to all site pages, settings menu and help modal.
    * Settings menu with controls to enable/disable Music, Sound effects and Persistent Storage (toggles between local storage and session storage).

* Start Button
    * The game starts with a start button in the game's modal. A short explanation suggesting the player to match cards is provided. When the button is clicked the game starts and the timer fires up. 
    
* Game page:
    * Title: "Donut forget" a funny play on words with "Don't forget", which also gives the player an idea that its a game to match different types of donuts. 
    * Timer that ticks up till 5 minutes, when the game stops and you have to start over. 
    * Animated cards when flipped and when a matching pair is found. The cards have 2 sides, at the start of the game the card has sprinkles, just like some donuts have. On the flip side are different types of round donuts, all duplicated, to make 18 different donut pairs. 

* End Game Button:
    * An ‘Exit’ button that will take the user back to the Home page.
    
### Features Left to Implement
* Additional card decks containing alternative objects. 
* Option to change to different difficulty levels.
* A high score counter. 
* Sound effects when a pair is matched and when a pair is not matched. 
* Use licensed images for game. 

### Technologies Used

Languages
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

Frameworks and Programs
* [JQuery](https://jquery.com/)
    * Used to enable interactive elements of the game.
* [Balsamiq](https://balsamiq.com/)
    * Wireframes were created in Balsamiq.
* [GitHub](https://github.com/)
    * Used to store and save coded work from Gitpod as repositories. It was also used to deploy the website.
* [Gitpod](https://gitpod.io/workspaces/)
    * Used to write out the Javascript, HTML and CSS code in its editor, as well as the README file. It also stored the images for game as well as wireframes. Also used Gitpod for Git add, status, commit and push the code to Github.  
* [Clipart Library](http://clipart-library.com/clipart/588576.htm)
    * Borrowed image for the backface side of the cards. 
* [Shutterstock](https://www.shutterstock.com/image-vector/donuts-set-american-sweet-dessert-chocolate-1080335852?src=ua9J0F8uWgNR-7sFKUEZpg-3-11)
    * Borrowed images for donut characters. 
* [Google Fonts](https://fonts.google.com/)
    * Used two complementary fonts for this game. 
* [Stack Overflow](https://stackoverflow.com/)
    * Used Stack Overflow to provide information on the randomisation of cards for this project, Count up timer, and general troubleshooting help. 
* [W3 Shools](https://www.w3schools.com/)
    * Used to help with the technicalites of writing good code. 

## Testing

During the build
Throughout the development of this site, it was previewed locally as each new element was added, and also, the built-in browser developer tools for Chrome, Edge, Opera and Firefox were used to ensure that the layout was responsive for all screen sizes. In addition, console.log messages were added to all functions in order to test and track the output of all functions and identify which logical option was being triggered.
￼
 
￼
With the console messages in place, multiple scenarios were tested to make sure that the game was working correctly.
 

Deployment
Once the game was deployed, it was tested on multiple devices and feedback was also requested from friends and co-workers.  

