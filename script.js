let humanScore = 0
let getComputerScore = 0

function getComputerChoice(){
    const choices = ["rock", "papper", "scissors"]
    let randomNum = Math.random()
    if (randomNum <= 0.3){
        return choices[0]
    } else if(randomNum <= 0.6) {
        return choices[1]
    } else if(randomNum <= 1) {
        return choices[2]
    }
}

function getHumanChoice(){
    let userChoice = prompt("rock, papper or scissors")
    console.log(userChoice)
    return userChoice
}

function PlayRound(){
    
}

console.log(getHumanChoice())