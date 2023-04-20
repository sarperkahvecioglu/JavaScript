'use strict';

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let playing, scores, currentPlayer, currentScore;

const init = function () {


    playing = true;

    scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;

    current1El.textContent = 0;
    current0El.textContent = 0;

    player0.classList.add("player--active");
    player1.classList.remove("player--active");

    player1.classList.remove("player--winner");
    player0.classList.remove("player--winner");


    diceEl.classList.add("hidden");

    currentScore = 0;
    currentPlayer = 0;

}

init();

const changePlayer = function () {

    document.getElementById(`current--${currentPlayer}`).textContent = 0;

    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}



rollDice.addEventListener("click", function () {

    if (playing) {
        //Generating random dice roll
        const randomNumber = Math.trunc((Math.random() * 6) + 1);

        //Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${randomNumber}.png`;

        //Check for rolled 1
        if (randomNumber !== 1) {
            //Add dice to current score
            currentScore += randomNumber;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;


        } else {
            //Switch player

            changePlayer();

        }
    }
}
);

btnHold.addEventListener("click", function () {
    if (playing) {
        scores[currentPlayer] += Number(currentScore);

        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];

        if (scores[currentPlayer] >= 100) {
            document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");
            document.querySelector(".dice").classList.add("hidden");

            playing = false;


        } else changePlayer();





    }
})


btnNew.addEventListener("click", init);





