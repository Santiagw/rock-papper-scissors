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
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"
        verifyWinner()
        return `You win ${playerSelection} Beats ${computerSelection}`;
    }
    else if (playerSelection === "papper" && computerSelection === "rock") {
        humanScore++
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"
        verifyWinner()

        return `You win ${playerSelection} Beats ${computerSelection}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "papper") {
        humanScore++
        humanScoreDisplay.textContent = "human: " + humanScore
        winnerDisplay.textContent = "human wins and gets one point"
        verifyWinner()

        return `You win ${playerSelection} Beats ${computerSelection}`;
    } else if (ComputerScore === 5) {

    }
    else if (playerSelection === computerSelection) winnerDisplay.textContent = `It is a Tie!`;
    else {
        ComputerScore++
        computerScoreDisplay.textContent = "computer: " + ComputerScore
        winnerDisplay.textContent = "computer wins and gets one point"
        verifyWinner()

        return `You lose ${computerSelection} Beats ${playerSelection}`;
    }

}

function verifyWinner() {
    if (humanScore === 5) {
        humanScore = 0
        ComputerScore = 0
        humanScoreDisplay.textContent = "human: " + humanScore
        computerScoreDisplay.textContent = "computer: " + ComputerScore


        winnerDisplay.textContent = "human wins the game"
    } else if (ComputerScore === 5) {
        ComputerScore = 0
        humanScore = 0
        computerScoreDisplay.textContent = "computer: " + ComputerScore
        humanScoreDisplay.textContent = "human: " + humanScore


        winnerDisplay.textContent = "computer wins the game"
    }
}

let humanScore = 0
let ComputerScore = 0

const gameContainer = document.querySelector("#container")
const resultsContainer = document.querySelector(".results")

const rockBTN = document.createElement("button")
const papperBTN = document.createElement("button")
const scissorsBTN = document.createElement("button")
const btnContainer = document.createElement("div")

const rockImg = document.createElement("img");
const papperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

const humanScoreDisplay = document.createElement("p")
humanScoreDisplay.classList.add("humanScore")

const computerScoreDisplay = document.createElement("p")
computerScoreDisplay.classList.add("computerScore")

const winnerDisplay = document.createElement("h1")
winnerDisplay.classList.add("winner")


rockBTN.appendChild(rockImg)
papperBTN.appendChild(papperImg)
scissorsBTN.appendChild(scissorsImg)

rockBTN.classList.add("button")
papperBTN.classList.add("button")
scissorsBTN.classList.add("button")

btnContainer.classList.add("buttons-container")


rockImg.classList.add("image");
papperImg.classList.add("image");
scissorsImg.classList.add("image");

rockImg.src = "https://parkercon.github.io/rock-paper-scissors/images/rock.png"
papperImg.src = "https://parkercon.github.io/rock-paper-scissors/images/paper.png"
scissorsImg.src = "https://parkercon.github.io/rock-paper-scissors/images/scissors.png"

computerScoreDisplay.textContent = "computer: " + ComputerScore
humanScoreDisplay.textContent = "human: " + humanScore

rockBTN.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

papperBTN.addEventListener("click", () => {
    playRound("papper", getComputerChoice())
});

scissorsBTN.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

btnContainer.append(rockBTN, papperBTN, scissorsBTN)
gameContainer.insertBefore(btnContainer, resultsContainer)
resultsContainer.append(humanScoreDisplay, computerScoreDisplay, winnerDisplay)