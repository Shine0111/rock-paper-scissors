
function getComputerChoice() {
    let choices = ["ROCKS", "PAPERS", "SCISSORS"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice;
}

let result = null;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCKS" && computerSelection == "SCISSORS") {
        console.log("You win! ROCKS beats SCISSORS.");
    result = 1;
        return result;
    }
    else if (playerSelection == "ROCKS" && computerSelection == "PAPERS") {
        console.log("You loose! PAPERS beats ROCKS.");
    result = 0;
        return result;
    }
    else if (playerSelection == "PAPERS" && computerSelection == "ROCKS") {
        console.log("You win! PAPERS beats ROCKS.");
    result = 1;
        return result;
    }
    else if (playerSelection == "PAPERS" && computerSelection == "SCISSORS") {
        console.log("You loose! SCISSORS beats PAPERS.");
    result = 0;
        return result;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCKS") {
        console.log("You loose! ROCKS beats SCISSORS.");
    result = 0;
        return result;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPERS") {
        console.log("You win! SCISSORS beats PAPERS.");
    result = 1;
        return result;
    }
    else {
        console.log(`That's a Draw!`);
    result = 0.5;
        return result;
    }
}

let playerPoint = null;
let computerPoint = null;

function game() {
    for (i = 0; i < 5; i++) {

        let round = null;
        console.log(`Round ${round = i} !`)
        let playerSelection = prompt("Rocks, Papers or Scissors ? ");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));


        if (result == 1) {
            playerPoint++;
        }
        else if (result == 0) {
            computerPoint++;
        }
        else {
            playerPoint += 0.5;
            computerPoint += 0.5;
        }

    }


    console.log(`Player Point: ${playerPoint}`);
    console.log(`ComputerPoint: ${computerPoint}`);

    getWinner();

}

function getWinner() {
    if (playerPoint > computerPoint) {
        console.log("You're the absolute Winner !");
    }
    else if (computerPoint > playerPoint) {
        console.log("Sorry, You Loose!");
    }
    else {
        console.log("Tie Game!");
    }
}