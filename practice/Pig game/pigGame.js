const diceElement = document.getElementsByClassName('dice')[0];

const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');

let currentScore = 0;

let activePlayer = 0;

let isPlaying = true;

document.getElementsByClassName('btn--roll')[0].addEventListener('click',()=>{
    const dice = Math.trunc(Math.random()*6)+1;
    diceElement.classList.remove('hidden');
    diceElement.src = `../../../images/dice${dice}.png`;

   if(dice !== 1){
        currentScore += dice;
        // currentScorePlayer1.textContent = currentScore;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }else{
        playerSwitch();
    } 
});


const playerSwitch = ()=>{
    currentScore = 0;
    // currentScorePlayer1.textContent = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.getElementsByClassName('player--0')[0].classList.toggle('player--active');
    document.getElementsByClassName('player--1')[0].classList.toggle('player--active');
}


//scores[0] is player1 . scores[1] is player2
let scores = [0,0];

document.getElementsByClassName('btn--hold')[0].addEventListener('click',()=>{
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
    
        if(scores[activePlayer] > 10){
            document.getElementsByClassName(`player--${activePlayer}`)[0].classList.add('player--winner');
            diceElement.classList.add('hidden');
        }

    playerSwitch();
});


document.getElementsByClassName('btn--new')[0].addEventListener('click',()=>{
    scores = [0,0];

    scorePlayer1.innerHTML = 0;
    scorePlayer2.innerHTML = 0;

    currentScorePlayer1.innerHTML = 0;
    currentScorePlayer2.innerHTML = 0;

    document.getElementsByClassName(`player--0`)[0].classList.remove('player--winner');
    document.getElementsByClassName(`player--0`)[0].classList.add('player--active');

    document.getElementsByClassName(`player--1`)[0].classList.remove('player--winner');
    document.getElementsByClassName(`player--1`)[0].classList.remove('player--active');

    activePlayer = 0;
    isPlaying = true;
});

