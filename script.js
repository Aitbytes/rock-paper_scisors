
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
    
    return prompt("Rock, paper or scisors ?").toLowerCase ;
};

function checkWinner(computerChoice, playerChoice) {

};

function playGame() {

};