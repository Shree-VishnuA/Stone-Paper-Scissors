let stdiv = document.body.querySelector("#stone");

var ys = 0;
var cs = 0;
var gameEnded = false; // Track if game has ended
var isThinking = false; // Track if computer is thinking

function updateScores() {
  document.querySelector(".ys").innerHTML = `${ys}`;
  document.querySelector(".cs").innerHTML = `${cs}`;
}

function disableButtons() {
  document.querySelector("#stone").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

function enableButtons() {
  document.querySelector("#stone").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

function showThinking() {
  document.body.querySelector(".result").innerHTML = "Computer is thinking...";
  let dots = 0;
  
  return setInterval(() => {
    dots = (dots + 1) % 4;
    document.body.querySelector(".result").innerHTML = "Computer is thinking" + ".".repeat(dots);
  }, 500);
}

stdiv.addEventListener("click", () => {
  // Check if game has ended or computer is thinking
  if (gameEnded || isThinking) {
    return;
  }
  
  isThinking = true;
  disableButtons();
  
  // Show thinking animation
  const thinkingInterval = showThinking();
  
  // Random delay between 1.5 to 3.5 seconds
  const delay = Math.random() * 2000 ;
  
  setTimeout(() => {
    clearInterval(thinkingInterval);
    
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
    
    isThinking = false;
    if (!gameEnded) {
      enableButtons();
    }
  }, delay);
});

let padiv = document.body.querySelector("#paper");
padiv.addEventListener("click", () => {
  // Check if game has ended or computer is thinking
  if (gameEnded || isThinking) {
    return;
  }
  
  isThinking = true;
  disableButtons();
  
  // Show thinking animation
  const thinkingInterval = showThinking();
  
  // Random delay between 1.5 to 3.5 seconds
  const delay = Math.random() * 1000 ;
  
  setTimeout(() => {
    clearInterval(thinkingInterval);
    
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
    
    isThinking = false;
    if (!gameEnded) {
      enableButtons();
    }
  }, delay);
});

let scdiv = document.body.querySelector("#scissors");
scdiv.addEventListener("click", () => {
  // Check if game has ended or computer is thinking
  if (gameEnded || isThinking) {
    return;
  }
  
  isThinking = true;
  disableButtons();
  
  // Show thinking animation
  const thinkingInterval = showThinking();
  
  // Random delay between 1.5 to 3.5 seconds
  const delay = Math.random() * 1000 ;
  
  setTimeout(() => {
    clearInterval(thinkingInterval);
    
    let compno = Math.floor(3 * Math.random());
    let comp3;
    
    if (compno == 0) {
      comp3 = "Paper";
      document.body.querySelector(
        ".result"
      ).innerHTML = `Scissors vs ${comp3}... You won..!<br>`;
      ys += 1;
    } else if (compno == 1) {
      comp3 = "Scissors";
      document.body.querySelector(
        ".result"
      ).innerHTML = `Scissors vs ${comp3}... Its a draw...<br>`;
    } else if (compno == 2) {
      comp3 = "Stone";
      document.body.querySelector(
        ".result"
      ).innerHTML = `Scissors vs ${comp3}... U lost...<br>`;
      cs += 1;
    }
    
    // Update score displays after each move
    document.querySelector("#ys").innerHTML = `<br>${ys} `;
    document.querySelector("#cs").innerHTML = `<br>${cs} `;
    
    // Check for game end after each move
    checkGameEnd();
    
    isThinking = false;
    if (!gameEnded) {
      enableButtons();
    }
  }, delay);
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
    isThinking = false; // Reset thinking state
    enableButtons(); // Re-enable buttons
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