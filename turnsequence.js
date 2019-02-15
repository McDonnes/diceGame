//Declare Globals
let display = document.getElementById("results");
let d3Button = document.getElementById("d3Btn");
let d4Button = document.getElementById("d4Btn");
let d5Button = document.getElementById("d5Btn");
let d6Button = document.getElementById("d6Btn");
let d7Button = document.getElementById("d7Btn");
let d120Button = document.getElementById("d120Btn");
let skipButton = document.getElementById("skipButton");
let player1 = {
	name: "Player 1",
	d3: rollDie(3),
	d4: rollDie(4),
	d5: rollDie(5),
	d6: rollDie(6),
	d7: rollDie(7),
	d120: rollDie(120),			
};
let player2 = {
	name: "Player 2",
	d3: rollDie(3),
	d4: rollDie(4),
	d5: rollDie(5),
	d6: rollDie(6),
	d7: rollDie(7),
	d120: rollDie(120),
};

//Main
startGame();

function startGame(){
	display.innerHTML = "Welcome to Factzee!";
	display.innerHTML += "---------------------------\nInitial Rolls.....";
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "---------------------------------------------------------------------------------\n"
	r1p1();

}
function PlayerDisplay(name, d3, d4, d5, d6, d7, d120){
	display.innerHTML += "\n" + name + ":\n";
	display.innerHTML += "-------3D-----4D-----5D-----6D-----7D-------120D--------\n";
	display.innerHTML += "Dice:   ["+d3+ "]        [" +d4+ "]       ["+d5+ "]        ["+d6+ "]        ["+d7+ "]          ["+d120+ "]\n";
}
function rollDie(numSides){
	let min = 1;
	let result = Math.floor(Math.random()*(numSides+1 - min) + min);
	display.innerHTML = "--------- You Rolled: " + result + "\n";
	return result;
}
//man...javascript is such a weak language....
function r1p1(){
	display.innerHTML += "Player 1 Start.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player1.d3 = rollDie(3);r1p2();}, once);
	d4Button.addEventListener("click", function(){player1.d4 = rollDie(4);r1p2();}, once);
	d5Button.addEventListener("click", function(){player1.d5 = rollDie(5);r1p2();}, once);
	d6Button.addEventListener("click", function(){player1.d6 = rollDie(6);r1p2();}, once);
	d7Button.addEventListener("click", function(){player1.d7 = rollDie(7);r1p2();}, once);
	d120Button.addEventListener("click", function(){player1.d120 = rollDie(120);r1p2();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; r1p2();}, once);
}
function r1p2(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "Player 2's Turn.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player2.d3 = rollDie(3);r2p1();}, once);
	d4Button.addEventListener("click", function(){player2.d4 = rollDie(4);r2p1();}, once);
	d5Button.addEventListener("click", function(){player2.d5 = rollDie(5);r2p1();}, once);
	d6Button.addEventListener("click", function(){player2.d6 = rollDie(6);r2p1();}, once);
	d7Button.addEventListener("click", function(){player2.d7 = rollDie(7);r2p1();}, once);
	d120Button.addEventListener("click", function(){player2.d120 = rollDie(120);r2p1();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; r2p1();}, once);
}
function r2p1(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "Player 1's Turn.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player1.d3 = rollDie(3);r2p2();}, once);
	d4Button.addEventListener("click", function(){player1.d4 = rollDie(4);r2p2();}, once);
	d5Button.addEventListener("click", function(){player1.d5 = rollDie(5);r2p2();}, once);
	d6Button.addEventListener("click", function(){player1.d6 = rollDie(6);r2p2();}, once);
	d7Button.addEventListener("click", function(){player1.d7 = rollDie(7);r2p2();}, once);
	d120Button.addEventListener("click", function(){player1.d120 = rollDie(120);r2p2();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; r2p2();}, once);
}
function r2p2(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "Player 2's Turn.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player2.d3 = rollDie(3);r3p1();}, once);
	d4Button.addEventListener("click", function(){player2.d4 = rollDie(4);r3p1();}, once);
	d5Button.addEventListener("click", function(){player2.d5 = rollDie(5);r3p1();}, once);
	d6Button.addEventListener("click", function(){player2.d6 = rollDie(6);r3p1();}, once);
	d7Button.addEventListener("click", function(){player2.d7 = rollDie(7);r3p1();}, once);
	d120Button.addEventListener("click", function(){player2.d120 = rollDie(120);r3p1();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; r3p1();}, once);
}
function r3p1(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "Player 1's Turn.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player1.d3 = rollDie(3);r3p2();}, once);
	d4Button.addEventListener("click", function(){player1.d4 = rollDie(4);r3p2();}, once);
	d5Button.addEventListener("click", function(){player1.d5 = rollDie(5);r3p2();}, once);
	d6Button.addEventListener("click", function(){player1.d6 = rollDie(6);r3p2();}, once);
	d7Button.addEventListener("click", function(){player1.d7 = rollDie(7);r3p2();}, once);
	d120Button.addEventListener("click", function(){player1.d120 = rollDie(120);r3p2();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; r3p2();}, once);
}
function r3p2(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "Player 2's Turn.....\n";
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){player2.d3 = rollDie(3);endGame();}, once);
	d4Button.addEventListener("click", function(){player2.d4 = rollDie(4);endGame();}, once);
	d5Button.addEventListener("click", function(){player2.d5 = rollDie(5);endGame();}, once);
	d6Button.addEventListener("click", function(){player2.d6 = rollDie(6);endGame();}, once);
	d7Button.addEventListener("click", function(){player2.d7 = rollDie(7);endGame();}, once);
	d120Button.addEventListener("click", function(){player2.d120 = rollDie(120);endGame();}, once);
	skipButton.addEventListener("click", function(){display.innerHTML = "--------- Turn Skipped\n"; endGame();}, once);
}
function endGame(){
	display.innerHTML += "---------------------------\n";
	display.innerHTML += "GAME OVER!      RESULTS:\n";
	display.innerHTML += "---------------------------\n";
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);

}