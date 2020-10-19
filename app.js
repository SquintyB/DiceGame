/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variables
// Declarations
let scores, roundScore, activePlayer, gameStart;
// Initialize Variables
scores = [0,0];
roundScore = 0;
activePlayer = 0;


// Get Document Objects
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.querySelector('.btn-roll').addEventListener("click", function(){
// Generate Random number
  var diceRoll = Math.floor(Math.random() * 6) + 1;
// Unhide dice element and display proper graphic
  let diceDisplay = document.querySelector(".dice");
  diceDisplay.style.display = "block";
  diceDisplay.src = `dice-${diceRoll}.png`;
//update round score and add to global score or end turn
if(diceRoll !== 1){
    // add score
    roundScore += diceRoll;
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
}else{
    roundScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent = "0";
    // If 
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0; //Ternary Operator example
    // Toggle active indicator
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDisplay.style.display = 'none';
}

});
