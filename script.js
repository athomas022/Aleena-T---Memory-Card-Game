// // PART 1: LANDING PAGE NAVIGATION
// //TASK 1.1: CREATING A GAMER OBJECT
//  const gamer = {
//         gamerName: "", // Setting the name to no value and to be populated by gamer
//         winStatus: false, // default is that they have not won at the begining of the game
//     };

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

// PART 2: PLAY THE GAME
//Task 2.1: create the cards using an array....
const cardsDeck = document.querySelector(".cards-container");
let memoryCards = ["Card 1","Card 2","Card 3", "Card 4","Card 5", "Card 6", "Card 7", "Card 8", "Card 9", "Card 10", "Card 11", "Card 12"];

for (let i=0; i<memoryCards.length; i++){
   let cardInDeck = document.createElement("button");
    cardsDeck.appendChild(cardInDeck);
    cardInDeck.classList.add("cards");
    cardInDeck.setAttribute("id", `${memoryCards[i]}`);
    cardInDeck.style.backgroundColor = "black";
}
//...and set images into these buttons




console.log(cardsDeck);
//Task 2.2: create the click event and function to switch opacity of the cards when clicked


//Task 2.3: create a timer that goes off when the second card is clicked AND function to match the cards


//Task 2.4: keep score of how many cards are being turned correctly


//Task 2.5: update the winstatus when all the cards are turned over




//PART 3: RESTART GAME OR EXIT