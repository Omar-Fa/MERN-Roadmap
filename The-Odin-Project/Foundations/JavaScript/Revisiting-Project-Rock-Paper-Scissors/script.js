const buttons = document.querySelectorAll('#buttons button');
const roundResult = document.getElementById('roundResult');
const scoreDisplay = document.getElementById('score');
const gameWinner = document.getElementById('gameWinner');
const startButton = document.getElementById('startGame');
const buttonContainer = document.getElementById('buttons');
const roundInput = document.getElementById('roundInput');
const resetButton = document.getElementById('resetGame');

let humanScore = 0;
let computerScore = 0;
let targetWins = 0;
let gameOver = true;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult.textContent = `🤝 It's a tie! You both chose ${humanChoice}.`;
    return;
  }

  const wins =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  if (wins) {
    humanScore++;
    roundResult.textContent = `✅ You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `❌ You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Live color updates
  if (humanScore > computerScore) {
    scoreDisplay.style.color = '#2e7d32'; // green
  } else if (computerScore > humanScore) {
    scoreDisplay.style.color = '#c62828'; // red
  } else {
    scoreDisplay.style.color = '#333'; // neutral
  }

  checkWinner();
}

function checkWinner() {
  if (humanScore === targetWins || computerScore === targetWins) {
    gameOver = true;
    buttonContainer.classList.add('hidden');
    roundInput.disabled = false;
    startButton.disabled = false;
    resetButton.classList.remove('hidden');

    gameWinner.textContent =
      humanScore > computerScore
        ? '🎉 You win the game!'
        : '💀 Computer wins the game!';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (gameOver) return;
    const playerSelection = button.getAttribute('data-choice');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});

startButton.addEventListener('click', () => {
  const rounds = parseInt(roundInput.value);
  if (isNaN(rounds) || rounds <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  targetWins = rounds;
  humanScore = 0;
  computerScore = 0;
  gameOver = false;

  roundInput.disabled = true;
  startButton.disabled = true;
  buttonContainer.classList.remove('hidden');
  roundResult.textContent = `First to ${rounds} wins! Make your move!`;
  scoreDisplay.textContent = `Human: 0 | Computer: 0`;
  scoreDisplay.style.color = '#333';
  gameWinner.textContent = '';
  resetButton.classList.add('hidden');
});

resetButton.addEventListener('click', () => {
  roundInput.value = '';
  roundInput.disabled = false;
  startButton.disabled = false;
  resetButton.classList.add('hidden');
  roundResult.textContent = 'Choose how many rounds to play!';
  scoreDisplay.textContent = `Human: 0 | Computer: 0`;
  scoreDisplay.style.color = '#333';
  gameWinner.textContent = '';
});
