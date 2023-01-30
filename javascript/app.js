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
    let computerChoice = gameChoice[arrayIndex]
    return computerChoice
}
//console.log(getComputerChoice())

function playRound(playerChoice, computerChoice) {

        playerChoice = getPlayerChoice()
        // assigning function to variable declared in playRound function.
        computerChoice = getComputerChoice()
        //assigning function to computerChoice variable in playRound function.
        
        console.log(playerChoice)
        //display player choice
        console.log(computerChoice)
        //display computer choice 

        if (playerChoice == computerChoice) {
            console.log('tis a draw')
        }
        else if (playerChoice == 'rock' && computerChoice == 'scissors') {
            console.log('you win')
            playerScore++;
        }
        else if (playerChoice == 'rock' && computerChoice == 'paper') {
            console.log('you lose')
            computerScore++;
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock') {
            console.log('you win')
            playerScore++;
        }
        else if (playerChoice == 'paper' && computerChoice == 'scissors') {
            console.log('you lose')
            computerScore++;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper') {
            console.log('you win')
            playerScore++;
        }
        else if (playerChoice == 'scissors' && computerScore == 'rock') {
            console.log('you lose')
            computerScore++;
        }
    }

//console.log(playRound())

function playGame() {
    for (i = 0; i < 3; i++) {
        playRound();
        console.log(playerScore, computerScore)
    }
}
console.log(playGame())

function results() {
    let winnerScore = playerScore - computerScore
    let loserScore = computerScore - playerScore
    let winner = 'Congratulations! You won by ' + winnerScore
    let loser = 'Damn! you lost by ' + loserScore

    if (playerScore > computerScore) {
        console.log(winner)
    }
    else if (playerScore < computerScore) {
        console.log(loser)
    }
    else if (playerScore == computerScore) {
        console.log("It's a draw!")
    }
    console.log('player score: ' + playerScore)
    console.log('computer score: ' + computerScore)
}
console.log(results())
