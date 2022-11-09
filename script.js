

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() *choices.length);
    return choices[random];
}   


let computerScore = 0;
let playerScore = 0;

function playRound(){
    let playerReply = prompt("Please enter your choice", " ")
    const playerSelection = playerReply.toLowerCase();
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
    
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
}





function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    if (playerScore > computerScore) {
        alert("You won the game");
    }
    else if (playerScore < computerScore) {
        alert("You lose the game");
    }
    else if (playerScore == computerScore){
        alert("It's a freaking tie");
    }
}

game();
/*

    if (computerScore >)
print "You chose" + playerSelection + ", the computer chose " + computerSelection+ ". You" + result +" this round."
print "After five games, the winner is " +
*/