// PART 1: LANDING PAGE NAVIGATION
//TASK 1.1: CREATING A GAMER OBJECT
let gamerName = ""; // Setting the name to no value and to be populated by gamer
//TASK 1.2: CREATING WELCOME PROMPT IN THE WBEPAGE
let gamerInput = document.querySelector("#name-input"); // Selected the input element
let welcomeContainer = document.querySelector("#welcome-container");
let instructionsContainer = document.querySelector("#instructions");
// function below will execute when the lets go button on the html is clicked
function showInstructions(){
    localStorage.setItem("gamerName", gamerInput.value);
if (welcomeContainer.style.display === "block"){
    welcomeContainer.style.display = "none";
    instructionsContainer.style.display = "block";
} else {
    welcomeContainer.style.display = "block";
    instructionsContainer.style.display = "none";
}
}

showInstructions();
//Function below will execute when the playgame button on the html is clicked
function openGame(){
window.location.href = "./index_2.html" 
}


console.log(localStorage);
// console.log(openGame);
