
document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#computer-score"); // Ensure this matches the HTML

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randomIdx = Math.floor(Math.random() * options.length);
        return options[randomIdx];
    };

    const drawGame = () => {
        console.log("DRAW!");
        msg.innerText = "It's a draw!";
        msg.style.backgroundColor = "blue";
    };

    const showWinner = (userWin) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore; // Update user score
            console.log("You win!");
            msg.innerText = "You win!";
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorePara.innerText = compScore; // Update computer score
            console.log("You lose!");
            msg.innerText = "You lose!";
            msg.style.backgroundColor = "red";
        }
    };

    const playGame = (userChoice) => {
        console.log("User choice = ", userChoice);
        const compChoice = genCompChoice();
        console.log("Computer choice = ", compChoice);

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = false;
            if (userChoice === "rock") {
                userWin = compChoice === "scissors";
            } else if (userChoice === "paper") {
                userWin = compChoice === "rock";
            } else if (userChoice === "scissors") {
                userWin = compChoice === "paper";
            }
            showWinner(userWin);
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
});

