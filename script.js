let humanScore = 0
let ComputerScore = 0

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
    console.log(userChoice)
    return userChoice
}

function PlayGame() {
    function PlayRound(HumanChoice, ComputerChoice) {
        HumanChoice.toLowerCase()
        if (HumanChoice == "rock" && ComputerChoice == "scissors") {
            humanScore = +1
            console.log("you win " + HumanChoice + " beats " + ComputerChoice)
        } if (HumanChoice == "scissors" && ComputerChoice == "papper") {
            humanScore = +1
            console.log("you win " + HumanChoice + " beats " + ComputerChoice)
        } if (HumanChoice == "papper" && ComputerChoice == "rock") {
            humanScore = +1
            console.log("you win " + HumanChoice + " beats " + ComputerChoice)
        } if (HumanChoice === ComputerChoice) {
            console.log("you win " + HumanChoice + " beats " + ComputerChoice)
        }

        if (ComputerChoice == "rock" && HumanChoice == "scissors") {
            ComputerScore = +1
            console.log("you lose " + ComputerChoice + " beats " + HumanChoice)
        } if (ComputerChoice == "scissors" && HumanChoice == "papper") {
            ComputerScore = +1
            console.log("you lose " + ComputerChoice + " beats " + HumanChoice)
        } if (ComputerChoice == "papper" && HumanChoice == "rock") {
            ComputerScore = +1
            console.log("you lose " + ComputerChoice + " beats " + HumanChoice)
        }

        console.log("compúter choice " + ComputerChoice)
        console.log("Human choice " + HumanChoice)

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    PlayRound(humanSelection, computerSelection)
    console.log("human score: " + humanScore)
    console.log("Computer score: " + ComputerScore)
}

PlayGame()