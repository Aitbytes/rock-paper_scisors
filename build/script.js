
const ROCK_BUTTON = document.getElementById("rock_button")
const PAPER_BUTTON = document.getElementById("paper_button")
const SCISORS_BUTTON = document.getElementById("scisors_button")
const PROMPT =document.getElementById("prompt")
const PLAYER_CHOICE = document.getElementById("player_choice");
const AI_CHOICE = document.getElementById("ai_choice");

ROCK_BUTTON.addEventListener('click', buttonIsPressed);
SCISORS_BUTTON.addEventListener('click', buttonIsPressed);
PAPER_BUTTON.addEventListener('click', buttonIsPressed);

function getComputerChoice() {
    const num = Math.floor(Math.random()*3) + 1;

    if (num === 1) {
        return {value : "rock" , emoji : '🪨' };
    }else if (num === 2) {
        return {value : "paper" , emoji : '🧻' };
    }else {
        return {value : "scisors" , emoji : '✂️' };
    }


};

let chosingPhase = 0;

function buttonIsPressed(event){
    if (chosingPhase) {
        chosingPhase=0;
        let playerChoice = {value : event.target.attributes.tag.value , emoji : event.target.innerHTML};
        console.log(playerChoice);
        PLAYER_CHOICE.innerHTML = playerChoice.emoji;
        let computerChoice = getComputerChoice();
        setTimeout(function(){
            const gameResult = checkWinner(computerChoice.value, playerChoice.value);
            AI_CHOICE.innerHTML = computerChoice.emoji;
            PROMPT.innerHTML = gameResult.text;
            resetGame();
            
        }, 3000)

    }
}
function resetGame(){
    setTimeout(function(){
        PROMPT.innerHTML ="Rock, paper or scisors ?";
        PLAYER_CHOICE.innerHTML ="";
        AI_CHOICE.innerHTML="";
        chosingPhase=1;
        PROMPT.style.color="purple";
    },3000)
}
/*
function getPlayerChoice() {
    PROMPT.innerHTML ="Rock, paper or scisors ?";
    choice = choice.toLowerCase();
    if ( !(choice === "rock") && !(choice === "paper") && !(choice === "scisors")) {
        alert("please write one of the following: rock, paper, scisors");
        return getPlayerChoice();
    } else {
        return choice;
    }
};
*/
function checkWinner(computerChoice, playerChoice) {
    if (((computerChoice === "rock") && (playerChoice === "scisors")) || ((computerChoice === "paper") && (playerChoice === "rock")) || ((computerChoice === "scisors") && (playerChoice === "paper"))) {
        winner = "computer";
        PROMPT.style.color="rgb(152 65 65)";
        return {text : ("Computer wins , " + computerChoice + " beats " + playerChoice), winner : "computer"};
    } else if (computerChoice === playerChoice) {
        PROMPT.style.color="yellow";
        return {text : ("it's a draw") , winner: "draw"};
    } else {
        PROMPT.style.color="rgb(34 139 72)";
        return {text : ("Player wins , " + playerChoice + " beats " + computerChoice), winner : "player"};
    }
};
 /*
function playGame() {
    console.log("you are going to play 5 rounds against the computer");
    let computerScore = 0;
    let playerScore = 0;

    for (let n=0; n < 5; n++) {

        const gameResult = checkWinner(getComputerChoice(), getPlayerChoice());
        console.log(gameResult.text);
        if (gameResult.winner === "computer") {
            computerScore++;
        } else if (gameResult.winner !== "draw") {
            playerScore++;
        }
        console.log("Computer's score : " + computerScore + "; Player's score : " + playerScore);
    }

    console.log("game finished");

    if (computerScore > playerScore) {
        console.log("computer wins");

    }else if (computerScore < playerScore) {
        console.log("player wins");
    } else {
        console.log("it's a draw, feel free to play another game");
    }

};
*/
resetGame();