

// tutaj ruch komputera wybierany losowo
function getComputerChoice (){
    let number = Math.floor(Math.random() * 4);
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

// ruch gracza
function playerSelectionn() {
    let choice = prompt("rock, paper or scissors?");
    let selection = choice.toLowerCase();
    return selection;
}

// wynik gry między graczem a komputerem
function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        return("remis");
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return("komputer przegrał");
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return("komputer wygrał");
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return("komputer wygrał");
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        return("remis");
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return("komputer przegrał");}   

    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return("komputer przegrał");
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return("komputer wygrał");
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return("remis");
        
    } else { 
        return("błąd")};
    
}

let playerSelection = playerSelectionn();
const computerSelection = getComputerChoice();

function game() {
    
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
}





console.log(game());

