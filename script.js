function getComputerChoice() {
    const choices = ["rock", "papper", "scissors"]
    let randomNum = Math.random()
    if (randomNum <= 0.3) {
        return choices[0]
    } else if (randomNum <= 0.6) {
        return choices[1]
    } else if (randomNum <= 1) {
        return choices[2]
    }
}

function getHumanChoice() {
    let userChoice = prompt("rock, papper or scissors")
    return userChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore++
        console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"
        return `You win ${playerSelection} Beats ${computerSelection}`;
    }
    else if (playerSelection === "papper" && computerSelection === "rock") {
        humanScore++
        console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"

        return `You win ${playerSelection} Beats ${computerSelection}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "papper") {
        humanScore++
        console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"

        return `You win ${playerSelection} Beats ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) return `It is a Tie!`;
    else {
        ComputerScore++
        console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
        computerScoreDisplay.textContent = "computer: " + ComputerScore
        winnerDisplay.textContent = "computer wins and gets one point"

        return `You lose ${computerSelection} Beats ${playerSelection}`;
    }

}

let humanScore = 0
let ComputerScore = 0

const gameContainer = document.querySelector("#container")
const resultsContainer = document.querySelector(".results")

const humanScoreDisplay = document.querySelector(".humanScore")
const computerScoreDisplay = document.querySelector(".computerScore")
const winnerDisplay = document.querySelector(".winner")

const rockBTN = document.createElement("button")
const papperBTN = document.createElement("button")
const scissorsBTN = document.createElement("button")

rockBTN.textContent = "rock"
papperBTN.textContent = "papper"
scissorsBTN.textContent = "scissors"


//attach an event listener to every button that calls the plaround function with its respective player selection

rockBTN.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

papperBTN.addEventListener("click", () => {
    playRound("papper", getComputerChoice())
});

scissorsBTN.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

gameContainer.append(rockBTN, papperBTN, scissorsBTN)