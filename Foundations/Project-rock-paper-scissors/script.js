let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

const getComputerChoice = () => {
  const randomNum = Math.random();
  if (randomNum < 0.34) return 'rock';
  else if (randomNum < 0.67) return 'paper';
  else return 'scissors';
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `🤝 It's a tie! Both chose ${humanChoice}.`;
  }

  const win =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  if (win) {
    humanScore++;
    return `✅ You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `❌ You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? '🏆 You won the game!' : '💻 Computer won the game!';
    resultsDiv.innerText = winner;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('button').forEach((btn) => (btn.disabled = true));
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    if (humanScore >= 5 || computerScore >= 5) return;

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    resultsDiv.innerText = result;
    scoreDiv.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
  });
});
