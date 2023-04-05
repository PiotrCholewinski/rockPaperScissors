let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');


function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    }
    
    )
}

// tutaj ruch komputera wybierany losowo

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}


// wynik gry między graczem a komputerem
function playRound(playerSelection) {
let computerSelection = computerPlay();
let result = "";
   

    if((computerSelection == "rock" && playerSelection == "paper")||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")) {

    playerScore += 1;
    result = ('<br>Gracz wygrał!!! <br><br> Gracz: ' + playerScore + ' Komputer: ' + computerScore);
    
    if(playerScore == 5) {
        result = "wygrałeś całą gre!!!"
        disableButtons();
    } 
}       

    else if((computerSelection == "rock" && playerSelection == "scissors")||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")) {

        computerScore += 1;
        result = "<br>Komputer wygrał!!! <br><br> Gracz: " + playerScore + " Komputer: " + computerScore;

        if(computerScore == 5) {
            result = "komputer wygrał całą grę!!!"
            disableButtons();
        } 
    }
       
    else {
        result = "<br> Remis <br><br> Gracz: " + playerScore + " Komputer: " + computerScore;  
   }


    document.getElementById('results').innerHTML = result
    return
}




buttons.forEach(button =>{
button.addEventListener('click', function(){
    playRound(button.id)
})
})


//result.textContent = `Result: ${res}`;
//result.classList.add("result");
//container.appendChild(result);
//rounds++;
//ppdisplay[0].textContent = `Computer Score: ${computerScore}`;
//cpdisplay[0].textContent = `Player Score: ${playerScore}`;








//const rock = document.querySelector('#rock');
//rock.addEventListener("click", () => {
//    alert("Hello");
//});