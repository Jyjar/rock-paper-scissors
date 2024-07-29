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
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if(humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
            case "paper":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                return "computerWin";
                break;
            case "scissor":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`) 
                return "humanWin"
                break;
        }
    } else if(humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
                return "humanWin"
                break;
            case "paper":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
            case "scissor":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
                return "computerWin";
                break;
        }
    } else if(humanChoice === "scissor") {
        switch (computerChoice) {
            case "rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                return "computerWin";
                break;
            case "paper":
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
                return "humanWin"
                break;
            case "scissor":
                console.log(`Draw! ${humanChoice} vs ${computerChoice}.`);
                break;
        }
    } else {
        console.log("Error");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let step = 0; step < 5; step++) {
        let winner = playRound();
        switch(winner) {
            case "humanWin":
                humanScore ++;
                break;
            case "computerWin":
                computerScore ++;
                break;
        }
    }
    
    if (humanScore > computerScore) {
        console.log(`You win! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    } else if (computerScore > humanScore) {
        console.log(`You lose! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    } else {
        console.log(`Draw! Your score: ${humanScore}. Computers score: ${computerScore}.`)
    }
}

playGame()


