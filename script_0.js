// PART 1: LANDING PAGE NAVIGATION
//TASK 1.1: CREATING A GAMER OBJECT
 const gamer = {
        gamerName: "", // Setting the name to no value and to be populated by gamer
        winStatus: false, // default is that they have not won at the begining of the game
    };

//TASK 1.2: CREATING WELCOME PROMPT IN THE WBEPAGE
let gamerInput = document.querySelector("#name-input"); // Selected the input element
// function below will execute when the button on the html is clicked
function grabName(){
gamer.gamerName = gamerInput.value
}
grabName();
function openGame(){
window.location.href = "http://127.0.0.1:5500/index_2.html" 
}


console.log(gamer);
console.log(openGame);
