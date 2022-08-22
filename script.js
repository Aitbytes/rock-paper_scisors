
function getComputerChoice() {
    const num = Math.floor(Math.random()*3) + 1;

    if (num === 1) {
        return "rock";
    }else if (num === 2) {
        return "paper";
    }else {
        return "scisors";
    }


};

function getPlayerChoice() {
    let choice = prompt("Rock, paper or scisors ?");
    choice = choice.toLowerCase();
    if ( !(choice === "rock") && !(choice === "paper") && !(choice === "scisors")) {
        alert("please write one of the following: rock, paper, scisors");
        return getPlayerChoice();
    } else {
        return choice;
    }
};

function checkWinner(computerChoice, playerChoice) {
    if (((computerChoice === "rock") && (playerChoice === "scisors")) || ((computerChoice === "paper") && (playerChoice === "rock")) || ((computerChoice === "scisors") && (playerChoice === "paper"))) {
        winner = "computer";
        return {text : ("Computer wins , " + computerChoice + " beats " + playerChoice), winner : "computer"};
    } else if (computerChoice === playerChoice) {
        return {text : ("it's a draw") , winner: "draw"};
    } else {
        return {text : ("Player wins , " + playerChoice + " beats " + computerChoice), winner : "player"};
    }
};

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