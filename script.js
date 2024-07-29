
function getComputerChoice() {
    let hand = ["rock", "paper", "scissor"];
    randomNumber = Math.floor(Math.random() * 3);
    return hand[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper or scissor.")
    if(choice === "rock") {
        return "rock";
    } else if(choice === "paper") {
        return "paper";
    } else if(choice === "scissor"){
        return "scissor";
    } else {
        console.log("Invalid input. Type rock, paper or scissor.");
        return getHumanChoice();
    }
}

let computerChoice = getComputerChoice();

let humanChoice = getHumanChoice();

console.log(humanChoice)