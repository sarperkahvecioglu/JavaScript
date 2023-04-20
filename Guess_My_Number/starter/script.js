'use strict';
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Whatever the new content";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;


document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

document.querySelector(".between").textContent = "(1-20)";
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".number").textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);


    if (!guess) {
        displayMessage("No Number!");



        //When player wins
    } else if (guess === secretNumber) {

        displayMessage("Correct Number!");
        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        document.querySelector(".number").textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }



    }

    else if (guess > secretNumber) {
        if (score > 0) {
            displayMessage("Too big!");
            score--;
            document.querySelector(".score").textContent = score;
        }
        if (score === 0) {
            displayMessage("You lost the game.");
        }


    } else if (guess < secretNumber) {
        if (score > 0) {
            displayMessage("Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        }
        if (score === 0) {
            displayMessage("You lost the game.");
        }
    }
}
);


document.querySelector(".again").addEventListener("click", function () {

    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1);

    displayMessage("Start Guessing...");

    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = "";

}
);






