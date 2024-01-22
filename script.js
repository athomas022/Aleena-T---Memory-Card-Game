// PART 2: PLAY THE GAME
//Select the parent container to create the cards
const cardsDeck = document.querySelector(".cards-container");
//Set up the variables to track the game
let cardsTurned = 0;// This is the variable to capture the no. of cards turned during the game; i.e, one succesful match is a += 2 to this variable
let unsuccessfulAttempts = 0;//This is the variable to track no. of unsucessful attempts; i.e., if the cards don't match, then +=1 to this variable
let clickCounter = 0;//This is the variable to track the no. of clicks, i.e., +1 for the first card and +2 for the second card; will be cleared if a unsuccesful or succesful match happens

//Create the pairs of cards in an array of objects
const memoryCardsPairs = [
    {cardName: "Yosemite", cardImage:"Images/cullen-jones-6pQHNpXjmNE-unsplash.jpg"},
    {cardName: "Glacier National", cardImage:"Images/david-morris-fxSf2ykpauk-unsplash.jpg"},
    {cardName: "Grand Canynon", cardImage:"Images/omer-nezih-gerek-ZZnH4GOzDgc-unsplash.jpg"},
    {cardName: "Yellowstone" , cardImage:"Images/jeromey-balderrama-0pmsaCGi_z0-unsplash.jpg"},
    {cardName: "Zion National", cardImage:"Images/jamie-hagan-RWzPBcWVdpw-unsplash.jpg"},
    {cardName: "Grand Tenton", cardImage:"Images/toan-chu-8dvphKlzJ40-unsplash.jpg"},
]
//Create an array to iterate over by adding to the pair up on top
const memoryCardsArray = [...memoryCardsPairs, ...memoryCardsPairs] //Combines the pairs above into the individual card objects; Watched the video in Reference 1

//Randomize cards using the Fisher-Yates Shuffle algorithm; Reviewed documentation referenced in 2
function randomizer(){
    for (let i=memoryCardsArray.length-1; i>0; i--){//iterates through the loop backwards
        let r = Math.floor(Math.random()) * (i+1);// generates a random number 
        let w = memoryCardsArray[i];//variable to place the new/swaped index values so that the first idex values are not changed
        memoryCardsArray[i] = memoryCardsArray[r];// swapping the i and r index values
        memoryCardsArray[r] = w; 
    }
}
randomizer();
//Generate a div for each of the 12 cards
for (let j=0; j<memoryCardsArray.length; j++){
    let cardInDeck = document.createElement("div");//Create 12 divs
    cardsDeck.appendChild(cardInDeck);//add them to the parent container
    // cardInDeck.classList.add("cards");//each child div has a class of "Cards"
    cardInDeck.innerHTML= //assign a front and back to each card; watched the video in Reference 1
    `<div class="card-up"<img src=${memoryCardsArray[j].cardImage}></div> 
    <div class="card-down"></div>`
    cardInDeck.addEventListener("click", turnOverCard);
}
// Initialize the card-up and card-down classes as variables
let cardUp= document.querySelectorAll(".card-up")
let cardDown = document.querySelectorAll(".card-down")
// console.log(cardUp);
// console.log(cardDown);

//Create the click event to turnover the cards
    function turnOverCard(selectCard){
    selectCard.preventDefault();
    clickCounter +=1;


    cardsturned += 2;//Add the count of the pair to the cardsturned function    
    }






// Task 2.4: keep score of how many cards are being turned correctly






// Task 2.5: Redirect the user when this threshold has been reached
// if (cardsturned = 12){
//     window.location.href = "http://127.0.0.1:5500/index_3.html" 
// }



//PART 3: RESTART GAME OR EXIT

//Reference
// 1. Watched the video: https://www.youtube.com/watch?v=xWdkt6KSirw; timstamps: 5:23-8:15
// 2. Reviewed the code in https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
