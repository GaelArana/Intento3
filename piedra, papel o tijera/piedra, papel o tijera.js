let currentPlayer = 1;
let playerChoices = [null, null];
let player1Wins = 0;
let player2Wins = 0;

const rondas = document.getElementById("rondas");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const choices = document.querySelectorAll(".choice");
const resultMessage = document.querySelector(".result-message");
const player1WinsDisplay = document.getElementById("player1Wins");
const player2WinsDisplay = document.getElementById("player2Wins");

choices.forEach((choice, index) => {
  choice.addEventListener("click", () => {
    if (currentPlayer === 1) {
      playerChoices[0] = choice.dataset.choice;
      player1.classList.remove("active");
      player2.classList.add("active");
      currentPlayer = 2;
      resultMessage.textContent = "Jugador 2, elige tu opción.";
    } else if (currentPlayer === 2) {
      playerChoices[1] = choice.dataset.choice;
      currentPlayer = 0;
      checkResult();
    }
  });
});

function checkResult() {
  if (playerChoices[0] !== null && playerChoices[1] !== null) {
    const result = determineWinner(playerChoices[0], playerChoices[1]);
    resultMessage.textContent = result;

    if (result === "¡Ganó el Jugador 1!") {
      player1Wins++;
    } else if (result === "¡Ganó el Jugador 2!") {
      player2Wins++;
    }

    player1WinsDisplay.textContent = player1Wins;
    player2WinsDisplay.textContent = player2Wins;

    playerChoices = [null, null];
    player1.classList.add("active");
    player2.classList.remove("active");
    currentPlayer = 1;
  }
}

function determineWinner(player1, player2) {
  if (player1 === player2) {
    return "¡Es un empate!";
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return "¡Ganó el Jugador 1!";
  } else {
    return "¡Ganó el Jugador 2!";
  }
}