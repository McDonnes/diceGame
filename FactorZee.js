let players = [];

startGame();


function startGame(){
	definePlayers();
	initialRoll();
	trackRolls();
}
function initialRoll(){
	for(let i = 0; i <players.length; i++){
		players[i].display.innerHTML ="Initial Roll........\n";
		players[i].d3 = rollDie(3);
		players[i].d4 = rollDie(4); 
		players[i].d5 = rollDie(5); 
		players[i].d6 = rollDie(6); 
		players[i].d7 = rollDie(7); 
		players[i].d120 = rollDie(120); 
		updateRack(0);
		updateRack(1);
	}
}
function rollDie(numSides){
	let min = 1;
	let result = Math.floor(Math.random()*(numSides+1 - min) + min);
	return result;
}
function trackRolls(){
	for(let i = 0; i<players.length; i++){
		players[i].d3Button.onclick = function(){playerRollsDie(i, 3);};
		players[i].d4Button.onclick = function(){playerRollsDie(i, 4);};
		players[i].d5Button.onclick = function(){playerRollsDie(i, 5);};
		players[i].d6Button.onclick = function(){playerRollsDie(i, 6);};
		players[i].d7Button.onclick = function(){playerRollsDie(i, 7);};
		players[i].d120Button.onclick = function(){playerRollsDie(i, 120);};
		players[i].skipButton.onclick = function(){playerRollsDie(i, 0);};
	}
}
function playerRollsDie(playerNum, die){
	players[playerNum].rolls++;
	switch(die){
		case 0:
			checkEndGame(0, playerNum);
			break;
		case 3:
			players[playerNum].d3 = rollDie(3);
			checkEndGame(players[playerNum].d3, playerNum);
			break;
		case 4:
			players[playerNum].d4 = rollDie(4);
			checkEndGame(players[playerNum].d4, playerNum);
			break;
		case 5:
			players[playerNum].d5 = rollDie(5);
			checkEndGame(players[playerNum].d5, playerNum);
			break;
		case 6:
			players[playerNum].d6 = rollDie(6);
			checkEndGame(players[playerNum].d6, playerNum);
			break;
		case 7:
			players[playerNum].d7 = rollDie(7);
			checkEndGame(players[playerNum].d7, playerNum);
			break;
		case 120:
			players[playerNum].d120 = rollDie(120);
			checkEndGame(players[playerNum].d120, playerNum);
			break;
	}
}
function checkEndGame(rollVal, playerNum){
	if(players[playerNum].rolls<=3){
		updateRack(playerNum);
	}
	if(rollVal == 0 && players[playerNum].rolls<3){
		players[playerNum].display.innerHTML = "Turn Skipped\n"
	}else if (players[playerNum].rolls<3){
		players[playerNum].display.innerHTML = "You've Rolled a " + rollVal +"\n";
	}else if(players[playerNum].rolls==3){
		players[playerNum].score = getPlayerScore(playerNum);
	}
	
}
function getPlayerScore(playerNum){
	let factors = [];
	let currentRack = [players[playerNum].d3, players[playerNum].d4, players[playerNum].d5, players[playerNum].d6, players[playerNum].d7];
	let score = 0;
	for(let i = 0; i < currentRack.length; i++){
		if(players[playerNum].d120%currentRack[i] === 0){
			factors.push(currentRack[i]);
		}
	}
	score = factors.length*10;
	score+=checkStraightBonus(factors);
	players[playerNum].s = score;  
	players[playerNum].display.innerHTML = "FINAL SCORE: " + score; 
	checkWinner(); 
}
function checkStraightBonus(factors){
	let straightCount = 0; 
	factors.sort();
	for(let i = 0; i <factors.length-1; i++){
		if(factors[i]+1 === factors[i+1] || factors[i] === factors[i+1]){
			straightCount++;
		}
	} 
	if(straightCount == (factors.length-1) && factors.length>2){
		return 100;
	}else{
		return 0;
	}
}
function checkWinner(){
	if((players[0].s !== 1) && (players[1].s !== 1)){
		if(players[0].s > players[1].s){
			players[0].display.innerHTML += ("   Player 1 Wins!");
			players[1].display.innerHTML += ("   Player 1 Wins!");
		}else if(players[0].s < players[1].s){
			players[0].display.innerHTML += ("   Player 2 Wins!");
			players[1].display.innerHTML += ("   Player 2 Wins!");
		}else{
			players[0].display.innerHTML += ("   Tie Game!");
			players[1].display.innerHTML += ("   Tie Game!");
		}
	}
}
function definePlayers(){
	let player1 = {
		name: "Player 1",
		d3: 0,
		d4: 0,
		d5: 0,
		d6: 0,
		d7: 0,
		d120: 0,
		rolls: 0,
		s: 1,
		display: document.getElementById("p1rolls"),
		d3Button: document.getElementById("p1d3Btn"),
		d4Button: document.getElementById("p1d4Btn"),
		d5Button: document.getElementById("p1d5Btn"),
		d6Button: document.getElementById("p1d6Btn"),
		d7Button: document.getElementById("p1d7Btn"),
		d120Button: document.getElementById("p1d120Btn"),
		skipButton: document.getElementById("p1skipButton"),
		imgRack: [	document.getElementById("p1Dice3"), 
					document.getElementById("p1Dice4"), 
					document.getElementById("p1Dice5"),
					document.getElementById("p1Dice6"),
					document.getElementById("p1Dice7")
		],
		d120txt: document.getElementById("p1Dice120")
	};
	let player2 = {
		name: "Player 2",
		d3: 0,
		d4: 0,
		d5: 0,
		d6: 0,
		d7: 0,
		d120: 0,
		rolls: 0,
		s: 1,
		display: document.getElementById("p2rolls"),
		d3Button: document.getElementById("p2d3Btn"),
		d4Button: document.getElementById("p2d4Btn"),
		d5Button: document.getElementById("p2d5Btn"),
		d6Button: document.getElementById("p2d6Btn"),
		d7Button: document.getElementById("p2d7Btn"),
		d120Button: document.getElementById("p2d120Btn"),
		skipButton: document.getElementById("p2skipButton"),
		imgRack: [	document.getElementById("p2Dice3"), 
					document.getElementById("p2Dice4"), 
					document.getElementById("p2Dice5"),
					document.getElementById("p2Dice6"),
					document.getElementById("p2Dice7")
		],
		d120txt: document.getElementById("p2Dice120")
	};
	players.push(player1);
	players.push(player2);
	players[0].innerHTML = "";
	players[1].innerHTML = "";
}
function updateRack(playerNum){
	let currentRack = [players[playerNum].d3, players[playerNum].d4, players[playerNum].d5, players[playerNum].d6, players[playerNum].d7];
	for(let i = 0; i < currentRack.length; i++){
		switch(currentRack[i]){
			case 1:
				players[playerNum].imgRack[i].src = "Dice1.png";
				break;
			case 2:
				players[playerNum].imgRack[i].src = "Dice2.png";
				break;
			case 3:
				players[playerNum].imgRack[i].src = "Dice3.png";
				break;
			case 4:
				players[playerNum].imgRack[i].src = "Dice4.png";
				break;
			case 5:
				players[playerNum].imgRack[i].src = "Dice5.png";
				break;
			case 6:
				players[playerNum].imgRack[i].src = "Dice6.png";
				break;
			case 7:
				players[playerNum].imgRack[i].src = "Dice7.png";
				break;
		}
		players[playerNum].d120txt.innerHTML = "               "+players[playerNum].d120;
	}
}

