
let display = document.getElementById("results");
let d3Button = document.getElementById("d3Btn");
let d4Button = document.getElementById("d4Btn");
let d5Button = document.getElementById("d5Btn");
let d6Button = document.getElementById("d6Btn");
let d7Button = document.getElementById("d7Btn");
let d120Button = document.getElementById("d120Btn");
let skipButton = document.getElementById("skipButton");
let round = 0;
let player1 = {
	name: "Player 1",
	d3: RollDie(3),
	d4: RollDie(4),
	d5: RollDie(5),
	d6: RollDie(6),
	d7: RollDie(7),
	d120: RollDie(120),			
};
let player2 = {
	name: "Player 2",
	d3: RollDie(3),
	d4: RollDie(4),
	d5: RollDie(5),
	d6: RollDie(6),
	d7: RollDie(7),
	d120: RollDie(120),
};
PlayGame(); 



function PlayGame(){
	display.innerHTML = "++++++++++++++++++++++++Welcome to Dice Game Demo!+++++++++++++++++++++++++++" + "\n";
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	display.innerHTML += "\n---------------------------ROUND 1------------------------------------\n";
	Player1Turn();

}

//diceSetIndex
//0 - 3d
//1 - 4d
//2 - 5d
//3 - 6d
//4 - 7d
//5 - 120d
//PlayerDisplay(player1, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
//PlayerDisplay(player2, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
function PlayerDisplay(name, d3, d4, d5, d6, d7, d120){
	display.innerHTML += "\n" + name + ":\n";
	display.innerHTML += "-------3D-----4D-----5D-----6D-----7D-------120D--------\n";
	display.innerHTML += "Dice:   ["+d3+ "]        [" +d4+ "]       ["+d5+ "]        ["+d6+ "]        ["+d7+ "]          ["+d120+ "]\n";
}
function RollDie(numSides){
	let min = 1;
	let result = Math.floor(Math.random()*(numSides+1 - min) + min);
	return result;
}
function Player1Turn(){
	if(round == 3){endGame();}
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 3); Player2Turn();}, once);
	d4Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 4);Player2Turn();}, once);
	d5Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 5);Player2Turn();}, once);
	d6Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 6);Player2Turn();}, once);
	d7Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 7);Player2Turn();}, once);
	d120Button.addEventListener("click", function(){rollCasePlayer1(player1.name, 120);Player2Turn();}, once);
	skipButton.addEventListener("click", function(){rollCasePlayer1(player1.name, 1);Player2Turn();}, once);
}
function Player2Turn(){
	round++;
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	let once = {once : true};
	let choice =0;
	d3Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 3); Player1Turn();}, once);
	d4Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 4); Player1Turn();}, once);
	d5Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 5); Player1Turn();}, once);
	d6Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 6); Player1Turn();}, once);
	d7Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 7); Player1Turn();}, once);
	d120Button.addEventListener("click", function(){rollCasePlayer2(player2.name, 120); Player1Turn();}, once);
	skipButton.addEventListener("click", function(){rollCasePlayer2(player2.name, 1); Player1Turn();}, once);
	
}
function rollCasePlayer1(name, choice){
	switch(choice){
		case 1:
			display.innerHTML += name + " skipped their turn!\n";
			break;
		case 3:
			player1.d3 = RollDie(3);
			display.innerHTML += name + " Rolled D3 for "+ player1.d3 +"\n";
			break;
		case 4:
			player1.d4 = RollDie(4);
			display.innerHTML += name + " Rolled D4 for "+ player1.d4 +"\n";
			break;
		case 5:
			player1.d5 = RollDie(5);
			display.innerHTML += name + " Rolled D5 for "+ player1.d5 +"\n";
			break;
		case 6:
			player1.d6 = RollDie(6);
			display.innerHTML += name + " Rolled D6 for "+ player1.d6 +"\n";
			break;
		case 7:
			player1.d7 = RollDie(7);
			display.innerHTML += name + " Rolled D7 for "+ player1.d7 +"\n";
			break;
		case 120: 
			player1.d120 = RollDie(120);
			display.innerHTML += name +" Rolled D120 for "+ player1.d120 +"\n";
			break;
		default:
			display.innerHTML += "An error has occurred!***\n";
	}	
	display.innerHTML += "\nPlayer 2 choosing move.........\n";
}
function rollCasePlayer2(name, choice){
	switch(choice){
		case 1:
			display.innerHTML += name + " skipped their turn!\n";
			break;
		case 3:
			player2.d3 = RollDie(3);
			display.innerHTML += name + " Rolled D3 for "+ player2.d3 +"\n";
			break;
		case 4:
			player2.d4 = RollDie(4);
			display.innerHTML += name + " Rolled D4 for "+ player2.d4 +"\n";
			break;
		case 5:
			player2.d5 = RollDie(5);
			display.innerHTML += name + " Rolled D5 for "+ player2.d5 +"\n";
			break;
		case 6:
			player2.d6 = RollDie(6);
			display.innerHTML += name + " Rolled D6 for "+ player2.d6 +"\n";
			break;
		case 7:
			player2.d7 = RollDie(7);
			display.innerHTML += name + " Rolled D7 for "+ player2.d7 +"\n";
			break;
		case 120: 
			player2.d120 = RollDie(120);
			display.innerHTML += name +" Rolled D120 for "+ player2.d120 +"\n";
			break;
		default:
			display.innerHTML += "An error has occurred!***\n";
	}	
	display.innerHTML += "\nPlayer 1 choosing move.........\n";
}
function endGame(){
	PlayerDisplay(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	PlayerDisplay(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
}


		