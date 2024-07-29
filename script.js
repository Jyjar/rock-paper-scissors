function getComputerChoice() {
    const hand = ["rock", "paper", "scissor"];
    return hand[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choice = prompt("Type rock, paper, or scissor.").toLowerCase();
    const validChoices = ["rock", "paper", "scissor"];

    if (validChoices.includes(choice)) {
        return choice;
    } else {
        console.log("Invalid input. Type rock, paper, or scissor.");
        return getHumanChoice();
    }
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if ((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "humanWin";
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computerWin";
    } else {
        console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`You win! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    } else if (computerScore > humanScore) {
        console.log(`You lose! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    } else {
        console.log(`Draw! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let step = 0; step < 5; step++) {
        let winner = playRound();
        switch (winner) {
            case "humanWin":
                humanScore++;
                break;
            case "computerWin":
                computerScore++;
                break;
        }
    }

    getWinner(humanScore, computerScore)
}

playGame()


