
function getComputerChoice() {
    hand = ["rock", "paper", "scissor"]
    randomNumber = Math.floor(Math.random() * 3)
    console.log(hand[randomNumber])
}

getComputerChoice()