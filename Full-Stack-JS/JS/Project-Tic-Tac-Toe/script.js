// ===== Gameboard Module =====
const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const getBoard = () => board;

  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
  };

  const placeMark = (index, marker) => {
    if (board[index] === '') {
      board[index] = marker;
      return true;
    }
    return false;
  };

  return { getBoard, resetBoard, placeMark };
})();

// ===== Player Factory =====
const Player = (name, marker) => {
  return { name, marker };
};

// ===== Game Controller Module =====
const GameController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let gameOver = false;

  const startGame = (name1, name2) => {
    player1 = Player(name1, 'X');
    player2 = Player(name2, 'O');
    currentPlayer = player1;
    Gameboard.resetBoard();
    gameOver = false;
    DisplayController.renderBoard();
    DisplayController.setMessage(
      `${currentPlayer.name}'s turn (${currentPlayer.marker})`
    );
  };

  const playTurn = (index) => {
    if (gameOver) return;
    if (Gameboard.placeMark(index, currentPlayer.marker)) {
      DisplayController.renderBoard();
      if (checkWin()) {
        gameOver = true;
        DisplayController.setMessage(`${currentPlayer.name} wins!`);
      } else if (checkTie()) {
        gameOver = true;
        DisplayController.setMessage("It's a tie!");
      } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        DisplayController.setMessage(
          `${currentPlayer.name}'s turn (${currentPlayer.marker})`
        );
      }
    }
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winCombos.some((combo) =>
      combo.every((index) => board[index] === currentPlayer.marker)
    );
  };

  const checkTie = () => {
    return Gameboard.getBoard().every((cell) => cell !== '');
  };

  return { startGame, playTurn };
})();

// ===== Display Controller Module =====
const DisplayController = (() => {
  const boardContainer = document.querySelector('.board');
  const messageDisplay = document.querySelector('.message');

  const renderBoard = () => {
    boardContainer.innerHTML = '';
    Gameboard.getBoard().forEach((mark, index) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = mark;
      cell.addEventListener('click', () => GameController.playTurn(index));
      boardContainer.appendChild(cell);
    });
  };

  const setMessage = (message) => {
    messageDisplay.textContent = message;
  };

  return { renderBoard, setMessage };
})();

// ===== Start Button Setup =====
document.querySelector('.start-btn').addEventListener('click', () => {
  const name1 = document.querySelector('#player1').value || 'Player 1';
  const name2 = document.querySelector('#player2').value || 'Player 2';
  GameController.startGame(name1, name2);
});
