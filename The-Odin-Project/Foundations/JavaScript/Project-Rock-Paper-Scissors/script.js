// console.log('Hello World');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function getHumanChoice() {
  const input = prompt(
    'Enter your choice: rock, paper, or scissors'
  ).toLowerCase();
  return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const player = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (player === computer) {
    console.log(`It's a tie! You both chose ${player}`);
    return;
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    humanScore++;
    console.log(`You win! ${player} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${player}`);
  }
}

function playGame() {
  let rounds = parseInt(prompt('How many rounds would you like to play?'));

  if (isNaN(rounds) || rounds <= 0) {
    console.log('Invalid number of rounds. Defaulting to 5 rounds.');
    rounds = 5;
  }
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= rounds; i++) {
    console.log(`\nRound ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log('\nGame Over!');
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log('🎉 You win the game!');
  } else if (computerScore > humanScore) {
    console.log('😞 You lose the game.');
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();
