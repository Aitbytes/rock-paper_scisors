
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
    const choice = prompt("Rock, paper or scisors ?").toLowerCase;
    if ((choice != "rock") || (choice != "paper") || (choice != "scisors")) {
        alert("please write one of the following: rock, paper, scisors");
        return getPlayerChoice();
    } else {
        return choice;
    }
};

function checkWinner(computerChoice, playerChoice) {

};

function playGame() {

};