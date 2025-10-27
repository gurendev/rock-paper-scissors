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
    updateUIScores();
    checkGameOver();
}

const endGame = (winner) => {
    displayResult(`${winner} wins the whole match!! GAME OVER.`);
    disableChoiceButtons();
}

const disableChoiceButtons = () => {
    const choiceButtons = document.querySelectorAll("button");
    for (const button of choiceButtons) {
        button.disabled = true;
    }
}

const checkGameOver = () => {
    if (humanScore === 5) {
        endGame("Human");
    }
    if (computerScore === 5) {
        endGame("Computer");
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

const updateUIScores = () => {
    const humanSpan = document.querySelector("#human-score");
    const computerSpan = document.querySelector("#computer-score");
    humanSpan.textContent = humanScore;
    computerSpan.textContent = computerScore;
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