function computerPlay() {
  // get a random int between 0, 1, and 2
  //if int is 0 return Rock
  //if int is 1 return Paper
  //if int is 2 return Scissors
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'Rock';
  } else if (randomNumber === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  //lowercase everything
  //if playerSelection = computerSelecton = tie
  //if playerSelection is rock and computerSelection = paper, return you lose!
  //if playerSelection is rock and computerSelection = scissors, return you win
  //do the same for the other options
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  // call playRound 5 times with the playerSelection with promt() and keep track of who wins 
  let yourScore = 0;
  let computerScore = 0;
  let selection = prompt("What's your selection?");
  let result = playRound(selection, computerPlay());
  if (result.includes("lose")) {
    computerScore = computerScore + 1;
  } else if (result.includes("win")) {
    yourScore = yourScore + 1;
  }
  console.log(result);

  selection = prompt("What's your selection?");
  result = playRound(selection, computerPlay());
  if (result.includes("lose")) {
    computerScore = computerScore + 1;
  } else if (result.includes("win")) {
    yourScore = yourScore + 1;
  }
  console.log(result);

  selection = prompt("What's your selection?");
  result = playRound(selection, computerPlay());
  if (result.includes("lose")) {
    computerScore = computerScore + 1;
  } else if (result.includes("win")) {
    yourScore = yourScore + 1;
  }
  console.log(result);

  selection = prompt("What's your selection?");
  result = playRound(selection, computerPlay());
  if (result.includes("lose")) {
    computerScore = computerScore + 1;
  } else if (result.includes("win")) {
    yourScore = yourScore + 1;
  }
  console.log(result);

  selection = prompt("What's your selection?");
  result = playRound(selection, computerPlay());
  if (result.includes("lose")) {
    computerScore = computerScore + 1;
  } else if (result.includes("win")) {
    yourScore = yourScore + 1;
  }
  console.log(result);

  if (yourScore > computerScore) {
    console.log(`You win with a score of ${yourScore} to the computer socre of ${computerScore}`);
  } else if (yourScore < computerScore) {
    console.log(`You lose with a score of ${yourScore} to the computer socre of ${computerScore}`);
  } else {
    console.log(`You tied with a score of ${yourScore}`);
  }
}

game();