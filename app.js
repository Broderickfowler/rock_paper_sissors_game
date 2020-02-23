let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);   
    return choices[randomNumber]
}

function convertToWord(letter) {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Sissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   // const smallUserWord = "user".fontsize(3)
    results_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You Win!`;
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord = "user".fontsize(3)
    results_div.innerHTML = `${convertToWord(userChoice)} lose to ${convertToWord(computerChoice)} You Lose!`;
}
function draw(userChoice, computerChoice) {
    //const smallUserWord = "user".fontsize(3)
    results_div.innerHTML = `${convertToWord(userChoice)} eaquals ${convertToWord(computerChoice)} It's a draw!`;
}


function game(userChoice) {
    //console.log("poop  " + userChoice)
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })                                                  // This Function shows r when rock is being selected
    paper_div.addEventListener('click', function(){
        game("p");
    })                                                 // This Function shows p when paper is being selected
    sissors_div.addEventListener('click', function (){
        game("s");
    })                                                 // This Function shows s when sissor is being selected
}

main(); 