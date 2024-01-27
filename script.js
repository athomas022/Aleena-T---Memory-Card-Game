// PART 2: PLAY THE GAME
//Select the parent container to create the cards
const cardsDeck = document.querySelector(".cards-container");
//Set up the variables to track the game
let cardsTurned = 0;// This is the variable to capture the no. of cards turned during the game; i.e, one succesful match is a += 2 to this variable
let unsuccessfulAttempts = 0;//This is the variable to track no. of unsucessful attempts; i.e., if the cards don't match, then +=1 to this variable
let clickCounter = 0;//This is the variable to track the no. of clicks, i.e., +1 for the first card and +2 for the second card; will be cleared if a unsuccesful or succesful match happens
let cardOne = "";//To temporaily save the first card object that was clicked
let cardTwo = ""//To temporaily save the second card object that was clicked
let showAttemptsLeft = document.querySelector(".attempts_left");//Setup of the Attempts left calc and display inspired by the video referenced in 1
showAttemptsLeft.innerHTML = "5";
let gamerName = localStorage.getItem("gamerName");//Researched how to utilized the localStorage function by watching video referenced in 4


//Create the pairs of cards in an array of objects; Watched video referenced in 1
//a. Create all possible options of cards
const memoryCardsPairs = [
    {cardName: "Yosemite", cardImage:"./Images/cullen-jones-6pQHNpXjmNE-unsplash.jpg"},
    {cardName: "Glacier National", cardImage:"./Images/david-morris-fxSf2ykpauk-unsplash.jpg"},
    {cardName: "Grand Canynon", cardImage:"./Images/omer-nezih-gerek-ZZnH4GOzDgc-unsplash.jpg"},
    {cardName: "Yellowstone" , cardImage:"./Images/jeromey-balderrama-0pmsaCGi_z0-unsplash.jpg"},
    {cardName: "Zion National", cardImage:"./Images/jamie-hagan-RWzPBcWVdpw-unsplash.jpg"},
    {cardName: "Grand Tenton", cardImage:"./Images/toan-chu-8dvphKlzJ40-unsplash.jpg"},
]
//b. Create an array to iterate over by adding to the pair up on top
const memoryCardsArray = [...memoryCardsPairs, ...memoryCardsPairs] //Combines the pairs above into the individual card objects

//Randomize cards using the Fisher-Yates Shuffle algorithm; Reviewed documentation referenced in 2
function randomizer(){
    for (let i = memoryCardsArray.length - 1; i > 0; i--){//iterates through the loop backwards
        let r = Math.floor(Math.random() * (i+1));// generates a random number between 0 and 11
        let w = memoryCardsArray[i];//variable to place the new/swaped index values so that the first idex values are not changed
        memoryCardsArray[i] = memoryCardsArray[r];// swapping the i and r index values
        memoryCardsArray[r] = w; 
    }
}randomizer();
// console.log(memoryCardsArray);
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
//If the card is down, remove that class list from this so as to display class list of card-up
if (clickCounter < 2){// As long as the clickcounter is less than 2:
    //If the cards selected are unmatched
    if (!selectCard.target.classList.contains("active") && !selectCard.target.classList.contains("matched") && selectCard.target.children[0].classList.contains("unmatched")){
        selectCard.target.children[0].classList.replace("unmatched", "active");
        clickCounter +=1;
        // if (cardOne === this.children[0])
        //     return;
        if(!cardOne){//Watched video referenced in 1 for storing the values of the clicks into the 2 seperate variables
        cardOne = this.children[0];
        // console.log(clickCounter);
        return;
        }  cardTwo = this.children[0];
            matchCards();
            //Set a timer if the clickCounter has hit 2
            if (clickCounter === 2){
                let activateTimer // Reviewed the documentation referenced in 3 for the timer functionality
                function pauseAfterSecondClick(){
                    activateTimer = setTimeout(resetTheCards, 1000);
                }
                pauseAfterSecondClick();
            }
    function resetTheCards(){
       document.querySelectorAll("img:not([matched])").forEach(function(element){ 
        element.classList.replace("active", "unmatched")})
       cardOne = "";
       cardTwo = "";
       clickCounter -=2;}
    //If the cards selected are an active class alert the user to select another card
} else if (selectCard.target.classList.contains("active")){
    window.alert("Card has been selected! Please choose another card.");
//If the cards selected are in the matched class alert the user to select another card
}else if (selectCard.target.classList.contains("matched")){ 
    window.alert("Card has already been MATCHED! Please choose another card.")
}
    }
    // Task 2.5: Redirect the user when this threshold has been reached
if (cardsTurned === 12){ 
    window.alert(`${gamerName}, You've Won!`)
    } 
}


function matchCards(){
    if(cardOne.src === cardTwo.src){
        cardOne.classList.replace("active", "matched");
        cardTwo.classList.replace("active", "matched");
        cardsTurned +=2;
        cardOne = "";
        cardTwo = "";
        console.log(cardsTurned);
    } else {
        unsuccessfulAttempts +=1;
        // window.alert("Wrong match. Pick another card!")
        let attemptsLeft = 5;
        attemptsLeft -= unsuccessfulAttempts;
        showAttemptsLeft.innerHTML=`${attemptsLeft}`; 
        // if (unsuccessfulAttempts >=5){
        //         window.alert("Sorry, but that's too many attempts. Try again!")
        //         window.location.reload();
}
}
// }
//PART 4: RESTART GAME OR EXIT
function exitGame(){
    window.location.href = "./index.html"
    gamerName = "";
}
function playAgain(){
    window.location.reload();
}

//References
// 1. Watched the video in https://www.youtube.com/watch?v=xWdkt6KSirw 
// 2. Reviewed the code in https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
// 3. Reviewed the code in https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/ 
// 4. Watched the video in https://www.youtube.com/watch?v=AUOzvFzdIk4 


