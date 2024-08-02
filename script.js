function getComputerChoice() {
    const hand = ["rock", "paper", "scissor"];
    return hand[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if ((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return "humanWin";
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissor" && humanChoice === "paper")
    ) {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        return "computerWin";
    } else {
        result.textContent = `Draw! ${humanChoice} vs ${computerChoice}.`;
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `You win!`
    } else if (computerScore > humanScore) {
        return `You lose!`
    } else {
        return `Draw!`
    }

}

function roundWinner(play) {
    switch (play) {
        case "humanWin":
            humanScore++;
            break;
        case "computerWin":
            computerScore++;
            break;
        }
}

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

const displayHumanScore = document.querySelector("#humanScore");
const displayComputerScore = document.querySelector("#computerScore");

const rockBtn = document.querySelector("#rock");

let buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;
    let choice;

    switch(target.id) {
        case 'rock':
        case 'paper':
        case 'scissor':
            choice = target.id;
            break;
    }

    if (choice) {
        roundWinner(playRound(choice));
        displayHumanScore.textContent = `Humanscore: ${humanScore}`;
        displayComputerScore.textContent = `Computerscore: ${computerScore}`;
    }

    if(humanScore === 5 || computerScore === 5){
        winner.textContent = getWinner(humanScore, computerScore);
    }
});






