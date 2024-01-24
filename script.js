// PART 2: PLAY THE GAME
// Select the parent container to create the cards
const cardsDeck = document.querySelector(".cards-container");

// Set up the variables to track the game
let cardsTurned = 0;
let unsuccessfulAttempts = 0;
let clickCounter = 0;
let cardOne = "";
let cardTwo = "";

// Create the pairs of cards in an array of objects
const memoryCardsPairs = [
    { cardName: "Yosemite", cardImage: "./Images/cullen-jones-6pQHNpXjmNE-unsplash.jpg" },
    { cardName: "Glacier National", cardImage: "./Images/david-morris-fxSf2ykpauk-unsplash.jpg" },
    { cardName: "Grand Canynon", cardImage: "./Images/omer-nezih-gerek-ZZnH4GOzDgc-unsplash.jpg" },
    { cardName: "Yellowstone", cardImage: "./Images/jeromey-balderrama-0pmsaCGi_z0-unsplash.jpg" },
    { cardName: "Zion National", cardImage: "./Images/jamie-hagan-RWzPBcWVdpw-unsplash.jpg" },
    { cardName: "Grand Tenton", cardImage: "./Images/toan-chu-8dvphKlzJ40-unsplash.jpg" },
];

// Create an array to iterate over by adding to the pair up on top
const memoryCardsArray = [...memoryCardsPairs, ...memoryCardsPairs];

// Randomize cards using the Fisher-Yates Shuffle algorithm
function randomizer() {
    for (let i = memoryCardsArray.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random()) * (i + 1);
        let w = memoryCardsArray[i];
        memoryCardsArray[i] = memoryCardsArray[r];
        memoryCardsArray[r] = w;
    }
}
randomizer();

// Generate a div for each of the 12 cards
for (let j = 0; j < memoryCardsArray.length; j++) {
    let cardInDeck = document.createElement("div");
    cardsDeck.appendChild(cardInDeck);
    cardInDeck.classList.add("cards");
    cardInDeck.innerHTML = `<img src=${memoryCardsArray[j].cardImage} class="unmatched"/>`;
    cardInDeck.addEventListener("click", turnOverCard);
}

// Create the click event to turnover the cards
function turnOverCard(selectCard) {
    console.log('clickCounter', clickCounter)
    console.log(selectCard.target.children[0])

    if (clickCounter < 2) {
        if (selectCard.target.children[0].classList.contains("unmatched")) {
            selectCard.target.children[0].classList.replace("unmatched", "active");
            clickCounter += 1;
            if (cardOne === this.children[0])
                return;
            if (!cardOne) {
                cardOne = this.children[0];
                return;
            }
            cardTwo = this.children[0];
            matchCards();
        } else if (selectCard.target.children[0].classList.contains("active")) {
            alert("Please select a card that isn't already selected")
        } else if (selectCard.target.children[0].classList.contains("matched")) {
            alert("This card has already been matched")
        }
    } else {
        document.querySelectorAll('img:not([matched])').forEach(function(elem) {
            elem.classList.replace("active", "unmatched")
        })
        cardOne = ""
        cardTwo = ""
        clickCounter = 0
    }
    unsuccessfulAttempts += 1;
}

function matchCards() {
    if (cardOne.src === cardTwo.src) {
        cardOne.classList.replace("active", "matched");
        cardTwo.classList.replace("active", "matched");
        cardsTurned += 2;
        cardOne = "";
        cardTwo = "";
    }
}

// Task 2.5: Redirect the user when this threshold has been reached
if (cardsTurned === 12) {
    window.location.href = "http://127.0.0.1:5500/index_3.html";
}

// PART 3: RESTART GAME OR EXIT
