
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let hand = ["rock", "paper", "scissor"];
    randomNumber = Math.floor(Math.random() * 3);

    return hand[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper or scissor.").toLowerCase();

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

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if(humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
            case "paper":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
                break;
            case "scissor":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`) 
                humanScore += 1;
                break;
        }
    } else if(humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
                humanScore += 1;
                break;
            case "paper":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
            case "scissor":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
                computerScore += 1;
                break;
        }
    } else if(humanChoice === "scissor") {
        switch (computerChoice) {
            case "rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
                break;
            case "paper":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
                humanScore += 1;
                break;
            case "scissor":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
        }
    } else {
        console.log("Error");
    }
}

playRound()
