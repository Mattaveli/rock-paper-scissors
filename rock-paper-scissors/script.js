let computerPlay = () => {
  let playChoiceArr = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * playChoiceArr.length);
  console.log("CPU: " + playChoiceArr[choice]);
  return playChoiceArr[choice];
};

let playerPlay = () => {
  const buttons = document.querySelectorAll("#btn");
  let choice;
  buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      choice = button.value;
      console.log(choice);
      return choice;
    });
  });
};

let getWinner = (playerChoice, computerChoice) => {
  let result;
  if (playerChoice == computerChoice) {
    result = "Tie Game!";
  } else if (playerChoice == "rock") {
    computerChoice == "paper"
      ? (result = "You Lose. Paper beats Rock :(")
      : (result = "You Win! Rock beats Scissors.");
  } else if (playerChoice == "paper") {
    computerChoice == "scissors"
      ? (result = "You Lose. Scissors beats Paper :(")
      : (result = "You Win! Paper beats rock.");
  } else if (playerChoice == "scissors") {
    computerChoice == "rock"
      ? (result = "You Lose. Rock beats Scissors :(")
      : (result = "You Win! Scissors beats paper.");
  }

  return result;
};

let updateResultsSection = (newMessage) => {
  message.textContent = newMessage;
  playerScoreCounter.textContent = "You: " + playerScore;
  cpuScoreCounter.textContent = "CPU: " + cpuScore;
};

let setIcons = (playerChoice, cpuChoice) => {
  switch (cpuChoice) {
    case "rock":
      cpuIcon.textContent = "🪨";
      break;
    case "paper":
      cpuIcon.textContent = "🧻";
      break;
    case "scissors":
      cpuIcon.textContent = "✂️";
      break;
  }

  switch (playerChoice) {
    case "rock":
      playerIcon.textContent = "🪨";
      break;
    case "paper":
      playerIcon.textContent = "🧻";
      break;
    case "scissors":
      playerIcon.textContent = "✂️";
      break;
  }
};

let game = (playerSelection) => {
  let cpu = computerPlay();
  setIcons(playerSelection, cpu);
  let winner = getWinner(playerSelection, cpu);
  console.log(winner);
  if (winner.startsWith("You Win")) {
    playerScore += 1;
    updateResultsSection("Winner!");
    console.log("Your score: " + playerScore + " CPU Score: " + cpuScore);
  } else if (winner.startsWith("You Lose.")) {
    cpuScore += 1;
    updateResultsSection("Loser :(");
    console.log("Your score: " + playerScore + " CPU Score: " + cpuScore);
  } else if (winner.startsWith("Tie")) {
    updateResultsSection("Tie Game");
  }
  let gameOver = isGameOVer(cpuScore, playerScore);
  if (gameOver) {
    resetGame();
  }
};
let isGameOVer = (cpuScore, playerScore) => {
  let gameOver = false;
  if (playerScore == numOfGames) {
    alert("You Win! 👍");
    gameOver = true;
  }
  if (cpuScore == numOfGames) {
    alert("You Lose 👎");
    gameOver = true;
  }

  return gameOver;
};

let resetGame = () => {
  playerScore = 0;
  cpuScore = 0;
  updateResultsSection(" ");
  numOfGames = getNumOfGames();
};

const buttons = document.querySelectorAll("#btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    choice = button.value;
    game(choice);
  });
});

let getNumOfGames = () => {
  let userInput = prompt("What score would you like to play up to?").trim();
  while (!userInput) {
    userInput = prompt("What score would you like to play up to?").trim();
  }

  return userInput;
};

let playerScore = 0;
let cpuScore = 0;
let numOfGames = getNumOfGames();
let playerScoreCounter = document.querySelector(".player-container");
let cpuScoreCounter = document.querySelector(".cpu-container");
let message = document.querySelector(".message");
let playerIcon = document.querySelector(".player-icon");
let cpuIcon = document.querySelector(".cpu-icon");

/*let cpu = computerPlay();
  console.log("cpu: " + cpu);
  let msg = getWinner(player, cpu);
  alert(msg);
  console.log(game());*/
//window.addEventListener("load", game);
