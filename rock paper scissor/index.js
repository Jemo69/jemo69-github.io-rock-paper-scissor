const playerText = document.querySelector('#playerText');
const computertext = document.querySelector('#computertext');
const resulttext = document.querySelector('#resulttext');
const choicebtn = document.querySelectorAll('.choicebtn');
let player;
let computer;
let result;
choicebtn.forEach(button => button.addEventListener('click',() => 
{
    player = button.textContent;
    computerTurn();
    playerText.textContent = player;
    computertext.textContent = computer;
    resulttext.textContent = checkWinner()

}))
function computerTurn(){
    const randNum = Math.floor(Math.random()*3)+1;
    switch (randNum) {
        case 1:
            computer = "rock";
            break
        case 2:
            computer = "paper";
                break   
        case 3:
        computer = "scissor";
        break;

    }
}
function checkWinner(){
    if ( player == computer){
        return "you draw"
        
    }
       
    else if (computer == "rock"){
                return(player == 'paper') ? "YOU win": "YOU lose";
    }
    else if (computer == "paper"){
        return(player == 'scissor') ? "YOU win" : "YOU lose"
    }
    else if (computer == "scissor"){
        return(player == 'rock') ? "YOU win" : "YOU lose"

    }

}
function pagereolader() {
    window.location.reload()
}
