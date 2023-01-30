let computerScore = 0
let playerScore = 0



//creating function to get a random int between specified operands.
function getRandomInt(max) {
    return Math.floor(Math.random() * max )
}

//console.log(getRandomInt(3))
//testing function getRandomInt

const gameChoice = ['rock', 'paper', 'scissors']
//creating array so I can use index to assign values to functions getPlayerChoice && getComputerChoice

function getPlayerChoice() {
    let playerChoice = prompt('please enter Rock, Paper or Scissors!').toLowerCase();
    //creating variable which is assigned through prompt.
    if (playerChoice === 'rock') {
        playerChoice = gameChoice[0]
    }
    else if (playerChoice === 'paper') {
        playerChoice = gameChoice[1]
    }
    else if (playerChoice === 'scissors') {
        playerChoice = gameChoice[2]
    }
    return playerChoice
}

//console.log(getPlayerChoice())

function getComputerChoice(arrayIndex = getRandomInt(3)) {
    return gameChoice[arrayIndex]
}
console.log(getComputerChoice())

