// console.log('Hello World');

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); // 0, 1, 2
  if (randomNum === 0) return 'rock';
  if (randomNum === 1) return 'paper';
  return 'scissors';
}

function getHumanChoice() {
  return prompt('Enter rock, paper, or scissors:').toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const choice = humanChoice.toLowerCase();

    if (choice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${choice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${choice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`\nRound ${i}:`);
    playRound(humanSelection, computerSelection);
    console.log(`Score → You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log('\nFinal Result:');
  if (humanScore > computerScore) {
    console.log('🎉 You win the game!');
  } else if (computerScore > humanScore) {
    console.log('😢 You lose the game!');
  } else {
    console.log("🤝 It's a tie overall!");
  }
}

playGame();
