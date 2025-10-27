let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors", "rock", "paper"]

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let choice = "";
    do {
        choice = prompt("rock, paper or scissors: ").toLocaleLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

const playRound = (humanChoice, computerChoice) => {
    humanIndex = choices.indexOf(humanChoice);
    computerIndex = choices.indexOf(computerChoice);
    if (humanIndex === computerIndex) {
        console.log("Draw!");
    } else if (choices[humanIndex + 1] === computerChoice) {
        console.log(`Computer wins with ${computerChoice} vs human's ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`Human wins with ${humanChoice} vs computer's ${computerChoice}`);
        humanScore++;
    }
}

const addChoiceButtonsEvents = () => {
    const choiceButtons = document.querySelectorAll("button");
    for (const button of choiceButtons) {
        button.addEventListener("click", (e) => {
            playRound(e.target.textContent, getComputerChoice());
        });
    }
}

addChoiceButtonsEvents();