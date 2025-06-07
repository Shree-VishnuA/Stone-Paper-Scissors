let stdiv = document.body.querySelector("#stone");

var ys = 0;
var cs = 0;
var gameEnded = false; // Track if game has ended

function updateScores() {
  document.querySelector(".ys").innerHTML = `${ys}`;
  document.querySelector(".cs").innerHTML = `${cs}`;
}

stdiv.addEventListener("click", () => {
  // Check if game has ended
  if (gameEnded) {
    return; // Don't allow clicking if game ended
  }
  
  let compno = Math.floor(3 * Math.random());
  let comp1;
  
  if (compno == 0) {
    comp1 = "Scissors";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Stone vs ${comp1} ... You won..!<br>`;
    ys++;
  } else if (compno == 1) {
    comp1 = "Stone";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Stone vs ${comp1} ... Its a draw...<br>`;
  } else if (compno == 2) {
    comp1 = "Paper";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Stone vs ${comp1} ... U lost...<br>`;
    cs += 1;
  }
  
  // Update score displays after each move
  document.body.querySelector("#ys").innerHTML = `<br>${ys} `;
  document.body.querySelector("#cs").innerHTML = `<br>${cs} `;
  
  // Check for game end after each move
  checkGameEnd();
});

let padiv = document.body.querySelector("#paper");
padiv.addEventListener("click", () => {
  // Check if game has ended
  if (gameEnded) {
    return; // Don't allow clicking if game ended
  }
  
  let compno = Math.floor(3 * Math.random());
  let comp2;
  
  if (compno == 0) {
    comp2 = "Stone";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Paper vs ${comp2}... You won..!<br>`;
    ys += 1;
  } else if (compno == 1) {
    comp2 = "Paper";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Paper vs ${comp2}... Its a draw...<br>`;
  } else if (compno == 2) {
    comp2 = "Scissors";
    document.body.querySelector(
      ".result"
    ).innerHTML = `Paper vs ${comp2}... U lost...<br>`;
    cs += 1;
  }
  
  // Update score displays after each move
  document.body.querySelector("#ys").innerHTML = `<br>${ys} `;
  document.body.querySelector("#cs").innerHTML = `<br>${cs} `;
  
  // Check for game end after each move
  checkGameEnd();
});

let scdiv = document.body.querySelector("#scissors");
scdiv.addEventListener("click", () => {
  // Check if game has ended
  if (gameEnded) {
    return; // Don't allow clicking if game ended
  }
  
  let compno = Math.floor(3 * Math.random());
  let comp3;
  
  if (compno == 0) {
    comp3 = "Paper";
    document.body.querySelector(
      ".result"
    ).innerHTML = `You ${comp3}... You won..!<br>`;
    ys += 1;
  } else if (compno == 1) {
    comp3 = "Scissors";
    document.body.querySelector(
      ".result"
    ).innerHTML = `You ${comp3}... Its a draw...<br>`;
  } else if (compno == 2) {
    comp3 = "Stone";
    document.body.querySelector(
      ".result"
    ).innerHTML = `You ${comp3}... U lost...<br>`;
    cs += 1;
  }
  
  // Update score displays after each move
  document.querySelector("#ys").innerHTML = `<br>${ys} `;
  document.querySelector("#cs").innerHTML = `<br>${cs} `;
  
  // Check for game end after each move
  checkGameEnd();
});

let tryagain = document.body.querySelector(".try");
tryagain.addEventListener("click", () => {
    // Reset everything and allow game to continue
    document.body.querySelector(".result").innerHTML = "";
    document.querySelector("#cs").innerHTML = "";
    document.querySelector("#ys").innerHTML = "";
    ys = 0;
    cs = 0;
    gameEnded = false; // Allow game to continue
});

// Separate function to check if game should end
function checkGameEnd() {
  if (cs == 10 || ys == 10) {
    if (cs == 10) {
      document.body.querySelector(".result").innerHTML = "Computer won the Game! Click 'Try Again' to play again.";
    } else {
      document.body.querySelector(".result").innerHTML = "You won the Game! Click 'Try Again' to play again.";
    }
    // Set game as ended
    gameEnded = true;
  }
}