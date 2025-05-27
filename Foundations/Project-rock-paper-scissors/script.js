console.log('Hello World');

const getComputerChoice = () => {
  const randomNum = Math.random();
  if (randomNum < 0.34) return 'rock';
  else if (randomNum < 0.67) return 'paper';
  else return 'scissors';
};

const getHumanChoice = () => {
  const userInput = prompt('Enter your choice: rock, paper, or scissors');
  return userInput.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
    console.log(`It's a tie! Both chose ${human}`);
  } else if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}`);
  }
}

function playGame() {
  // Reset scores each time the game runs
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      `Round ${i + 1} - Score: Human ${humanScore}, Computer ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log('🏆 You won the game!');
  } else if (humanScore < computerScore) {
    console.log('💻 Computer won the game!');
  } else {
    console.log("🤝 It's a tie!");
  }
}

// Start the game
playGame();
