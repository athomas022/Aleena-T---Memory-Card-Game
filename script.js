// PART 2: PLAY THE GAME
//Select the parent container to create the cards
const cardsDeck = document.querySelector(".cards-container");
//Set up the variables to track the game
let cardsTurned = 0;// This is the variable to capture the no. of cards turned during the game; i.e, one succesful match is a += 2 to this variable
let unsuccessfulAttempts = 0;//This is the variable to track no. of unsucessful attempts; i.e., if the cards don't match, then +=1 to this variable
let clickCounter = 0;//This is the variable to track the no. of clicks, i.e., +1 for the first card and +2 for the second card; will be cleared if a unsuccesful or succesful match happens
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
    for (let i=memoryCardsArray.length-1; i>0; i--){//iterates through the loop backwards
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
    selectCard.preventDefault();
//If the card is down, remove that class list from this so as to display class list of card-up
if (clickCounter < 2){// As long as the clickcounter is less than 2
    //If the cards selected are unmatched
    console.log(clickCounter);
    if (selectCard.target.children[0].classList.contains("unmatched")){
        selectCard.target.children[0].classList.replace("unmatched", "active");
        clickCounter +=1;
        if (cardOne === this.children[0])//Watched video referenced in 1 for storing the values of the clicks into the 2 seperate variables
            return;
        if(!cardOne){
        cardOne = this.children[0];
        return;
        }   cardTwo = this.children[0];
            console.log(cardOne);
            console.log(cardTwo);
            matchCards();
    //If the cards selected are an active class, check for whether it is the first card, allow for the second card and match the cards
    } else if (selectCard.target.children[0].classList.contains("active")){
        clickCounter +=1;
        if (cardOne === this.children[0])//Watched video referenced in 1 for storing the values of the clicks into the 2 seperate variables
            return;
        if(!cardOne){
        cardOne = this.children[0];
        return;
        }   cardTwo = this.children[0];
            console.log(cardOne);
            console.log(cardTwo);
            matchCards();
    //If the cards selected are in the matched class, remove the click event for the class with matched
    }else if (selectCard.target.children[0].classList.contains("matched")){
        let cardSelected = document.querySelectorAll(".matched")
        cardSelected.removeEventListener("click", turnOverCard);
    }
    //If the clickCounter > 2, then move the active class cards to unmatched, clear our clickCounter and add an unsucessful attempt
    } selectCard.target.children[0].classList.replace("active","unmatched");
      unsuccessfulAttempts +=1;
      clickCounter = 0;
    }
    
function matchCards(){
    if(cardOne === cardTwo){
        selectCard.target.children[0].classList.replace("active","matched");
        cardsTurned +=2;
        cardOne = "";
        cardTwo = "";
    } console.log("cards don't match");
}



// Task 2.5: Redirect the user when this threshold has been reached
if (cardsTurned === 12){
    window.location.href = "http://127.0.0.1:5500/index_3.html" 
}

//PART 3: RESTART GAME OR EXIT

//Reference
// 1. Watched the video in https://www.youtube.com/watch?v=xWdkt6KSirw 
// 2. Reviewed the code in https://gomakethings.com/merging-arrays-and-objects-with-vanilla-javascript/ 
// 3. Reviewed the code in https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2


//GRAVEYARD
// selectCard.target.style.display = "none";   => This will shift everything to left
// if (clickCounter === 2){ // click before the 
//     if (selectCard.target.classList.contains("hidden")){
//         selectCard.target.children[0].style.display = "inline";
//         selectCard.target.classList.replace("hidden", "show");
//         clickCounter +=1;
//         // console.log(clickCounter);
//     } else if (selectCard.target.classList.contains("show")){
//         selectCard.target.children[0].style.display = "none";
//         selectCard.target.classList.replace("show", "hidden");
//     }
// console.log(selectCard.target.children[0]);
// console.log(selectCard.target.classList);
// Adding the selected card to the card one variable
//     cardOne = selectCard.target.childen[0].value;
//     console.log(cardOne);
// //Adding the selected card to the card 2 variable
// if (cardTwo !== null){
//     cardTwo = selectCard.target.value //=> how can make this the second click? do i do a loop with a lenght of 2 (till the cards are done)?
//     if (cardOneValue === cardTwoValue){// set up the comparison
//     cardsTurned += 2;//Add the count of the pair to the cardsturned function    (add the cardsTurned here)
//     clickCounter -=2;//Clear the click counter}
    
//     cardDown[0].classList.remove("card-down");
// //     } else if (cardOneValue !== cardTwoValue){
// //         clickCounter -=2;
// //         cardDown.classList.add("card-down");
// //         unsuccessfulAttempts += 1;
//     }
// while (cardTwo === ""){
//    cardTwo = selectCard.target.children[0].value;} //could look at if statement for the number of clicks

//     selectCard.target.children[0].style.display = "inline";
//     selectCard.target.children[0].classList.replace("unmatched", "active");
//     clickCounter +=1;
// } else if (selectCard.target.classList.contains("show")){
//     selectCard.target.children[0].style.display = "none";
//     selectCard.target.classList.replace("show", "hidden");
// }