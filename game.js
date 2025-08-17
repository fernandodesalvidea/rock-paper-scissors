let humanScore = 0
let computerScore = 0
let winner = false;

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

    const results = document.querySelector("#results");
    results.textContent = `You chose: ${humanChoice}. The computer chose: ${computerChoice}`;
    const message = document.createElement("p");

    if(humanChoice === computerChoice){
        message.textContent = 'TIE!';
        results.appendChild(message);
        return
    }
    if(humanChoice === 'rock'){
        if(computerChoice === 'scissors'){
            humanScore++
            message.textContent = 'You win! Rock beats scissors!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You win! Rock beats scissors!');
        }
        if(computerChoice === 'paper'){
            computerScore++
            message.textContent = 'You lose! Paper beats rock!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You lose! Paper beats rock!');
        }
    }
    if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            humanScore++
            message.textContent = 'You win! Paper beats rock!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You win! Paper beats rock!');
        }
        if(computerChoice === 'scissors'){
            computerScore++
            message.textContent = 'You lose! Scissors beats paper!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You lose! Scissors beats paper!');
        }
    }
    if(humanChoice === 'scissors'){
        if(computerChoice === 'paper'){
            humanScore++
            message.textContent = 'You win! Scissors beats paper!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You win! Scissors beats paper!');
        }
        if(computerChoice === 'rock'){
            computerScore++
            message.textContent = 'You lose! Rock beats scissors!';
            results.appendChild(message);
            const scores = document.querySelector('#scores');
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
            //console.log('You lose! Rock beats scissors!');
        }
    }

    if(humanScore >= 5 ||computerScore >= 5){
        winner = true;
        if (humanScore > computerScore){
            const results = document.querySelector("#results");
            results.textContent = 'You win the game!';
            winner = true;
            }          
            else if (humanScore < computerScore){
                const results = document.querySelector("#results");
                results.textContent = 'You lose the game :(';
                winner = true;
            }
            else {
                const results = document.querySelector("#results");
                results.textContent = 'You tied with the computer.'
                winner = true;
            }
    }

}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playGame() {
    //show initial scores
    const scores = document.querySelector('#scores'); 
    scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;

    //add event listeners, only play if the scores are less than 5....
        rockButton.addEventListener('click', () => {
            if(winner == false)
                playRound('rock', getComputerChoice())

        });
        paperButton.addEventListener('click', () => {
            if(winner == false)
                playRound('paper', getComputerChoice())
        });
        scissorsButton.addEventListener('click', () => {
            if(winner == false)
                playRound('scissors', getComputerChoice())
        });
                    
            //display results
            scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;


}


playGame();



    
   







