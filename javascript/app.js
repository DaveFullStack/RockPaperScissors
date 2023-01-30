let computerScore = 0
let playerScore = 0



//creating function to get a random int between specified operands.
function getRandomInt(max) {
    return Math.floor(Math.random() * max )
}

//console.log(getRandomInt(3))
//testing function getRandomInt

const gameChoice = ['rock', 'paper', 'scissors']

function getComputerChoice(arrayIndex = getRandomInt(3)) {
    return gameChoice[arrayIndex]
}
console.log(getComputerChoice())
