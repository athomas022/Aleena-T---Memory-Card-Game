// // PART 1: LANDING PAGE NAVIGATION
// //TASK 1.1: CREATING A GAMER OBJECT
// const gamer = {
//     gamerName: "", // Setting the name to no value and to be populated by gamer
//     winStatus: false, // default is that they have not won at the begining of the game
// };

// //TASK 1.2: CREATING WELCOME PROMPT IN THE WBEPAGE
// let gamerInput = document.querySelector("#name-input"); // Selected the input element
// // function below will execute when the button on the html is clicked
// function grabName(){
// gamer.gamerName = gamerInput.value
// }
// grabName();
// function openGame(){
// window.location.href = "http://127.0.0.1:5500/index_2.html" 
// }


// console.log(gamer);
// console.log(openGame);

//LOCAL STORAGE -> LOCALSTORAGE; NAME RETRIEVE (AN OBJECT) >WHEN THE GAME ENDS, CLEAR THAT LOCAL STORAGE


// PART 2: PLAY THE GAME
//Select the parent container to create the cards
const cardsDeck = document.querySelector(".cards-container");
//Set up the variables to track the game
let cardsTurned = 0;// This is the variable to capture the no. of cards turned during the game; i.e, one succesful match is a += 2 to this variable
let unsuccessfulAttempts = 0;//This is the variable to track no. of unsucessful attempts; i.e., if the cards don't match, then +=1 to this variable
let clickCounter = null;//This is the variable to track the no. of clicks, i.e., +1 for the first card and +2 for the second card; will be cleared if a unsuccesful or succesful match happens
let cardOne = "";//To temporaily save the first card object that was clicked
let cardTwo = ""//To temporaily save the second card object that was clicked

//Create the pairs of cards in an array of objects
const memoryCardsPairs = [
    {cardName: "Yosemite", cardImage:"./Images/cullen-jones-6pQHNpXjmNE-unsplash.jpg"},
    {cardName: "Glacier National", cardImage:"./Images/david-morris-fxSf2ykpauk-unsplash.jpg"},
    {cardName: "Grand Canynon", cardImage:"./Images/omer-nezih-gerek-ZZnH4GOzDgc-unsplash.jpg"},
    {cardName: "Yellowstone" , cardImage:"./Images/jeromey-balderrama-0pmsaCGi_z0-unsplash.jpg"},
    {cardName: "Zion National", cardImage:"./Images/jamie-hagan-RWzPBcWVdpw-unsplash.jpg"},
    {cardName: "Grand Tenton", cardImage:"./Images/toan-chu-8dvphKlzJ40-unsplash.jpg"},
]
//Create an array to iterate over by adding to the pair up on top
const memoryCardsArray = [...memoryCardsPairs, ...memoryCardsPairs] //Combines the pairs above into the individual card objects; Reviewed documentation referenced in 2

//Randomize cards using the Fisher-Yates Shuffle algorithm; Reviewed documentation referenced in 3
function randomizer(){
    for (let i = memoryCardsArray.length - 1; i > 0; i--){//iterates through the loop backwards
        let r = Math.floor(Math.random()) * (i+1);// generates a random number between 0 and 11
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
    cardInDeck.classList.add("cards");//each child div has a class of "Cards"
    cardInDeck.innerHTML= `<img src=${memoryCardsArray[j].cardImage} class="unmatched"/>`
    cardInDeck.addEventListener("click", turnOverCard);
}
//Create the click event to turnover the cards
    function turnOverCard(selectCard){
        console.log("clickCounter", clickCounter);
        console.log(selectCard.target.children[0]);
//If the card is down, remove that class list from this so as to display class list of card-up
if (clickCounter < 2){// As long as the clickcounter is less than 2:
    //If the cards selected are unmatched
    if (selectCard.target.children[0].classList.contains("unmatched")){
        selectCard.target.children[0].classList.replace("unmatched", "active");
        clickCounter +=1;
        // if (cardOne === this.children[0])
        //     return;
        if(!cardOne){//Watched video referenced in 1 for storing the values of the clicks into the 2 seperate variables
        cardOne = this.children[0];
        return;
        }   cardTwo = this.children[0];
            matchCards();
    //If the cards selected are an active class alert the user to select another card
    } else if (selectCard.target.children[0].classList.contains("active")){// THIS IS A LSIGHT DIFFERENT
        window.alert("Card has been selected! Please choose another card.");
    //If the cards selected are in the matched class alert the user to select another card
    }else if (selectCard.target.children[0].classList.contains("matched")){ // THIS IS SLIGHTLY DIFFERENT TARGET
        window.alert("Card has already been MATCHED! Please choose another card.")
    }
    //If the clickCounter > 2, then move the active class cards to unmatched, clear our clickCounter and add an unsucessful attempt
    } else {
       document.querySelectorAll("img:not([matched])").forEach(function(element){ // Play around with this (timer/ automatically)
        element.classList.replace("active", "unmatched")
       })
       cardOne = "";
       cardTwo = "";
       clickCounter -=2;
    }
       unsuccessfulAttempts +=1;

// Task 2.5: Redirect the user when this threshold has been reached
    if (cardsTurned === 12){ // IN THE CLICK HANDLER (LOOK FOR THOSE CASES - WILL ONLY BE TRUE IN THE )
    window.alert("You've Won!") // TRY TO TOGGLE BETWEEN CONTAINER - COULD DO AWAY WITH LOCAL STORAGE
    }   
    }

function matchCards(){
    if(cardOne.src === cardTwo.src){
        cardOne.classList.replace("active", "matched");
        cardTwo.classList.replace("active", "matched");
        cardsTurned +=2;
        cardOne = "";
        cardTwo = "";
    } 
}






//PART 3: RESTART GAME OR EXIT

//Reference
// 1. Watched the video in https://www.youtube.com/watch?v=xWdkt6KSirw 
// 2. Reviewed the code in https://gomakethings.com/merging-arrays-and-objects-with-vanilla-javascript/ 
// 3. Reviewed the code in https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2


