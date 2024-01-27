# Unit 1 Project - Memory Card Game
![Memory Card Game](https://github.com/athomas022/Aleena-T---Memory-Card-Game/assets/152939696/6daa1b54-91b8-4a85-abfa-c28de5a3d20d)

## Technologies Used
Javascript, HTML, CSS
<br>

## Installation Instructions
This is a web-based desktop friendly game. Access the game live on github: [Memory Card Game](https://athomas022.github.io/Aleena-T---Memory-Card-Game/).
<br>

## User Stories
1. As the gamer, I want to access the landing page and the game and navigate seamlessly and without confusion.
2. As a gamer, I want to understand the instructions easily.
3. As a gamer, I want to be able to interact with the elements of the game on my screen and have them behave per instructions.
4. As a gamer, I want to be able to exit and replay the games as many times as I like.
5. As a gamer, I would like to track my progress visually either with the cards removed/turned up OR with an on-screen tracker.
6. As a gamer, I would like to know when I win or if I lost.
7. As a programer, I would like to access the JS and be able to understand the code and provide feedback on how efficiently and effectively the code is structured.
<br>


## Wireframes
![Landing Page](https://github.com/athomas022/Aleena-T---Memory-Card-Game/assets/152939696/eff7c90f-fa44-422f-b7bb-8e72354a274c)
![Game View](https://github.com/athomas022/Aleena-T---Memory-Card-Game/assets/152939696/4c0f1c31-8580-4c81-9385-c8acc5e58552)
![Game View2](https://github.com/athomas022/Aleena-T---Memory-Card-Game/assets/152939696/b9aec3f3-4744-40a5-b99b-b7f72aa37470)
<br>


## Approach taken:
1. Nagivation:
- Two html pages were created and the gamer can navigate between them with the "let's play" button and the "Exit Game" button.
- The "Go!" button will cpature the gamer's name and store it to localStorage and show instructions prior to getting to the second html
- The "Play Again" button will let the gamer continue to play the game with their username (i.e., it keeps the user on the same html page) and invokes the randomizer function(i.e., on loading the page)


3. Game variables


4. Gaming logic





## Unsolved Problems / Major Hurdles:
### Major Hurdles:
1. The most challenging aspects of this project was coding the gaming logic, specifically:
- Holding the values of the 2 click events in seperate variables prior to performing the match functions. Resolveed this by researching the appropriate use of the this function.
- Sequence the nested if...else statements inside the flipCard function. Resolved this by brainstorming and playing around with the sequencing of the functions/ if...else statements.
- The 2 unmatched cards would not flip until the 3rd card which lead for a sub-par user experince.So, introduced a timer to flip the unmatched cards after 1 second.
- Coming up with a shuffle technique which would randomize the cards on the game page loading. Researched the Fischer-Yates method and utilized this for the logic.
- Matching cards function was not working as intended with utilizing the target.children[0] syntax for cardOne and cardTwo. This was resolved by calling the image source of cardOne and cardTwo.
2. Holding the gamer input value till the end to show it in the win alert at the end. This was resolved by utilizing the localStorage method.


### Unresolved Problems:
1. The last card before a win or a try again alert will flip after the win or try again prompt.
2. It is not mobile friendly yet.

### Unresolved Stretch Goals:
1. Create Levels to the game where as the levels progress:
   - the number of cards increases.
   - the timer decreases.
2. Refine the aesthetic of the webpage (+add animation).
3. At the beginning of the game, have a "walk-through" demo instead of instructions.
4. Do away with the 2 Javascript files (i.e., merge them into one, do away with localStorage and utilize the hide and show toggle on the different containers to navigate to the game page.
5. Add text (for instructions) as a hover event over the buttons and the cards to further help the gamer navigate the game.

## References
1. Watched video on [YouTube](https://www.youtube.com/watch?v=xWdkt6KSirw)  
2. Reviewed the documentation on [W3schools](https://www.w3schools.com/howto/howto_css_center-vertical.asp)
3. Reviewed the documentation in [W3schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)
4. Watched the on [YouTube](https://www.youtube.com/watch?v=AUOzvFzdIk4)
5. Reviewed the code in documentation on [W3shools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2)
6. Reviewed documentation in [Freecodecamp](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)
7. Images from [Unsplash](https://unsplash.com/)
