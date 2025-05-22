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

function PlayGame() {
    let humanScore = 0
    let ComputerScore = 0
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            humanScore++
            console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
            return `You win ${playerSelection} Beats ${computerSelection}`;
        }
        else if (playerSelection === "papper" && computerSelection === "rock") {
            humanScore++
            console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
            return `You win ${playerSelection} Beats ${computerSelection}`;
        }
        else if (playerSelection === "scissors" && computerSelection === "papper") {
            humanScore++
            console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
            return `You win ${playerSelection} Beats ${computerSelection}`;
        }
        else if (playerSelection === computerSelection) return `It is a Tie!`;
        else {
            ComputerScore++
            console.log(`player scrore: ${humanScore}
            Computer score: ${ComputerScore}`)
            return `You lose ${computerSelection} Beats ${playerSelection}`;
        }

    }


    console.log(playRound(getHumanChoice(), getComputerChoice()))

}

PlayGame()