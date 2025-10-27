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
        displayResult("Draw!");
    } else if (choices[humanIndex + 1] === computerChoice) {
        displayResult(makeRoundWinnerString("Computer", computerChoice, "Human", humanChoice));
        computerScore++;
    } else {
        displayResult(makeRoundWinnerString("Human", humanChoice, "Computer", computerChoice));
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

const displayResult = (result) => {
    const feedbackContainer = document.querySelector(".feedback");
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    feedbackContainer.append(paragraph);
    scrollFeedback();
}

const makeRoundWinnerString = (winner, winnerChoice, loser, loserChoice) => {
    return `${winner} wins with ${winnerChoice} vs ${loser}'s ${loserChoice}`;
}

const scrollFeedback = () => {
    const feedback = document.querySelector(".feedback");
    if (feedback.scrollHeight > feedback.clientHeight) {
        feedback.scrollTop = feedback.scrollHeight;
    }
}

addChoiceButtonsEvents();