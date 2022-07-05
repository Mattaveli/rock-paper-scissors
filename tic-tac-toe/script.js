let computerPlay = () => {
  let playChoiceArr = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * playChoiceArr.length);
  return playChoiceArr[choice];
};

let playerPlay = () => {
  let playChoiceArr = ["rock", "paper", "scissors"];
  let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();

  while (playChoiceArr.indexOf(playerChoice) == -1) {
    playerChoice = prompt(
      "Invalid choice. Please choose rock, paper, or scissors."
    );
  }

  return playerChoice;
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

let game = () => {
  let playerScore = 0;
  let cpuScore = 0;
  for (let i = 0; i < 5; i++) {
    let player = playerPlay();
    let result = getWinner(player, computerPlay());
    console.log(result);
    if (result.startsWith("You Win")) {
      playerScore += 1;
    } else if (result.startsWith("You Lose.")) {
      cpuScore += 1;
    }
  }
  console.log("Player:" + playerScore);
  console.log("CPU Score: " + cpuScore);
  if (playerScore == cpuScore) {
    alert("Tie Game!");
  } else {
    playerScore > cpuScore ? alert("You Win! 👍") : alert("You Lose 👎");
  }
};
/*let cpu = computerPlay();
  console.log("cpu: " + cpu);
  let msg = getWinner(player, cpu);
  alert(msg);
  console.log(game());*/
btn.addEventListener("click", game);
