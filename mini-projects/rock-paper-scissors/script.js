const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');

const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;

    if (playerChoice === computerChoice) {
        resultMessage.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        resultMessage.textContent = 'You win!';
        playerScore++;
    } else {
        resultMessage.textContent = 'Computer wins!';
        computerScore++;
    }

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

rockBtn.addEventListener('click', () => {
    playGame('Rock');
});

paperBtn.addEventListener('click', () => {
    playGame('Paper');
});

scissorsBtn.addEventListener('click', () => {
    playGame('Scissors');
});
