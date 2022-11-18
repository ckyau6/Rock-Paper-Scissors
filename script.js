
const body = document.querySelector('body');
const content = document.createElement('p');
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() *choices.length);
    return choices[random];
}   


let computerScore = 0;
let playerScore = 0;
let playerSelection;

const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
       playerSelection = "rock";
       playRound();
    });

    const scissors = document.querySelector('#sci');
    scissors.addEventListener('click', () => {
       playerSelection = "scissors";
       playRound();
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
       playerSelection = "paper";
       playRound();
    });

function playRound(){
       
    const computerSelection = getComputerChoice();
    let result;

    if (playerSelection === computerSelection){
         result="tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
         result="lose";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
         result="win";
    }
    else if(playerSelection === "paper"&& computerSelection === "rock"){
         result="win";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
         result="lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
         result="lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
         result="win";
    }
    else {
         result="invalid";
    }


    if (result == "win"){
        playerScore++;
    }
    else if (result == "lose"){
        computerScore++;
    }
    
    showResults();
    

    if (playerScore == 5) {
        alert("You won the game");
    }
    else if (computerScore == 5){
        alert("The computer won the game");
    }

    function showResults(){
        content.textContent = `Computer chose ${computerSelection}. You chose ${playerSelection}. It's a ${result} for you.`
        body.appendChild(content);
    
        console.log(playerScore);
        console.log(computerScore);
        document.querySelector('#playerScore').textContent = playerScore.toString();
        document.querySelector('#computerScore').textContent = computerScore.toString();
    
        
    }
}   

