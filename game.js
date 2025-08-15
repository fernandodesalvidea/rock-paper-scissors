let humanScore = 0
let computerScore = 0

//get computer answer (random)
function getComputerChoice() {
    let n = Math.floor(Math.random() * 10)
    result = ''
    if (n <= 3)
        result = 'rock'
    else if (n > 3 && n <=6)
        result = 'paper'
    else 
        result = 'scissors'
    return result
}

//get choice from the user
function getHumanChoice() {
    let userChoice = prompt('please enter rock, paper, or scissors:')
    userChoice = userChoice.toLowerCase()
    return userChoice
}

function playRound(humanChoice, computerChoice){

    console.log('You chose: '+ humanChoice)
    console.log('The computer chose: ' + computerChoice)

    if(humanChoice === computerChoice){
        console.log('tie!')
        return
    }
    if(humanChoice === 'rock'){
        if(computerChoice === 'scissors'){
            humanScore++
            console.log('You win! Rock beats scissors!');
        }
        if(computerChoice === 'paper'){
            computerScore++
            console.log('You lose! Paper beats rock!');
        }
    }
    if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            humanScore++
            console.log('You win! Paper beats rock!');
        }
        if(computerChoice === 'scissors'){
            computerScore++
            console.log('You lose! Scissors beats paper!');
        }
    }
    if(humanChoice === 'scissors'){
        if(computerChoice === 'paper'){
            humanScore++
            console.log('You win! Scissors beats paper!');
        }
        if(computerChoice === 'rock'){
            computerScore++
            console.log('You lose! Rock beats scissors!');
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){ //play 5 rounds
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore)
        console.log('You win the game!')
    else if (humanScore < computerScore)
        console.log('You lose the game :(')
    else 
        console.log('You tied with computer.')
    //display results
    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)  
}

playGame()




