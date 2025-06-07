let stdiv = document.body.querySelector("#stone");

        var ys = 0;
        var cs = 0;
        var gameEnded = false;
        var isThinking = false;

        function getChoiceIcon(choice) {
            switch(choice.toLowerCase()) {
                case 'stone': return '🪨';
                case 'paper': return '📄';
                case 'scissors': return '✂️';
                default: return '❓';
            }
        }

        function createGameVisual(playerChoice, computerChoice) {
            return `
                <div class="game-visual">
                    <div class="choice-display">
                        <div class="choice-icon">${getChoiceIcon(playerChoice)}</div>
                        <div class="choice-label">You</div>
                    </div>
                    <div class="vs-text">VS</div>
                    <div class="choice-display">
                        <div class="choice-icon">${getChoiceIcon(computerChoice)}</div>
                        <div class="choice-label">Computer</div>
                    </div>
                </div>
            `;
        }

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
            if (gameEnded || isThinking) {
                return;
            }
            
            isThinking = true;
            disableButtons();
            
            const thinkingInterval = showThinking();
            const delay = Math.random() * 2000;
            
            setTimeout(() => {
                clearInterval(thinkingInterval);
                
                let compno = Math.floor(3 * Math.random());
                let comp1;
                let resultText;
                
                if (compno == 0) {
                    comp1 = "Scissors";
                    resultText = "You won!";
                    ys++;
                } else if (compno == 1) {
                    comp1 = "Stone";
                    resultText = "It's a draw!";
                } else if (compno == 2) {
                    comp1 = "Paper";
                    resultText = "You lost!";
                    cs += 1;
                }
                
                document.body.querySelector(".result").innerHTML = 
                    createGameVisual("Stone", comp1) + 
                    `<div><strong>${resultText}</strong></div>`;
                
                document.body.querySelector("#ys").innerHTML = `<br>${ys} `;
                document.body.querySelector("#cs").innerHTML = `<br>${cs} `;
                
                checkGameEnd();
                
                isThinking = false;
                if (!gameEnded) {
                    enableButtons();
                }
            }, delay);
        });

        let padiv = document.body.querySelector("#paper");
        padiv.addEventListener("click", () => {
            if (gameEnded || isThinking) {
                return;
            }
            
            isThinking = true;
            disableButtons();
            
            const thinkingInterval = showThinking();
            const delay = Math.random() * 1000;
            
            setTimeout(() => {
                clearInterval(thinkingInterval);
                
                let compno = Math.floor(3 * Math.random());
                let comp2;
                let resultText;
                
                if (compno == 0) {
                    comp2 = "Stone";
                    resultText = "You won!";
                    ys += 1;
                } else if (compno == 1) {
                    comp2 = "Paper";
                    resultText = "It's a draw!";
                } else if (compno == 2) {
                    comp2 = "Scissors";
                    resultText = "You lost!";
                    cs += 1;
                }
                
                document.body.querySelector(".result").innerHTML = 
                    createGameVisual("Paper", comp2) + 
                    `<div><strong>${resultText}</strong></div>`;
                
                document.body.querySelector("#ys").innerHTML = `<br>${ys} `;
                document.body.querySelector("#cs").innerHTML = `<br>${cs} `;
                
                checkGameEnd();
                
                isThinking = false;
                if (!gameEnded) {
                    enableButtons();
                }
            }, delay);
        });

        let scdiv = document.body.querySelector("#scissors");
        scdiv.addEventListener("click", () => {
            if (gameEnded || isThinking) {
                return;
            }
            
            isThinking = true;
            disableButtons();
            
            const thinkingInterval = showThinking();
            const delay = Math.random() * 1000;
            
            setTimeout(() => {
                clearInterval(thinkingInterval);
                
                let compno = Math.floor(3 * Math.random());
                let comp3;
                let resultText;
                
                if (compno == 0) {
                    comp3 = "Paper";
                    resultText = "You won!";
                    ys += 1;
                } else if (compno == 1) {
                    comp3 = "Scissors";
                    resultText = "It's a draw!";
                } else if (compno == 2) {
                    comp3 = "Stone";
                    resultText = "You lost!";
                    cs += 1;
                }
                
                document.body.querySelector(".result").innerHTML = 
                    createGameVisual("Scissors", comp3) + 
                    `<div><strong>${resultText}</strong></div>`;
                
                document.querySelector("#ys").innerHTML = `<br>${ys} `;
                document.querySelector("#cs").innerHTML = `<br>${cs} `;
                
                checkGameEnd();
                
                isThinking = false;
                if (!gameEnded) {
                    enableButtons();
                }
            }, delay);
        });

        let tryagain = document.body.querySelector(".try");
        tryagain.addEventListener("click", () => {
            document.body.querySelector(".result").innerHTML = "";
            document.querySelector("#cs").innerHTML = "";
            document.querySelector("#ys").innerHTML = "";
            ys = 0;
            cs = 0;
            gameEnded = false;
            isThinking = false;
            enableButtons();
        });

        function checkGameEnd() {
            if (cs == 10 || ys == 10) {
                if (cs == 10) {
                    document.body.querySelector(".result").innerHTML = "🤖 Computer won the Game! 🤖<br>Click 'Try Again' to play again.";
                } else {
                    document.body.querySelector(".result").innerHTML = "🎉 You won the Game! 🎉<br>Click 'Try Again' to play again.";
                }
                gameEnded = true;
            }
        }