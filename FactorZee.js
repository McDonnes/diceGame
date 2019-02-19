let players = [];
let p1Score = 1;
let p2Score = 1;

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
	}
	updateRack(0);
	updateRack(1);
}
function rollDie(numSides){
	let min = 1;
	let result = Math.floor(Math.random()*(numSides+1 - min) + min);
	return result;
}
function trackRolls(){
	for(let i = 0; i<players.length; i++){
		players[i].d3Button.addEventListener("click", function(){players[i].rolls++;players[i].d3 = rollDie(3);checkEndGame(players[i].d3, i);});
		players[i].d4Button.addEventListener("click", function(){players[i].rolls++;players[i].d4 = rollDie(4);checkEndGame(players[i].d4, i);});
		players[i].d5Button.addEventListener("click", function(){players[i].rolls++;players[i].d5 = rollDie(5);checkEndGame(players[i].d5, i);});
		players[i].d6Button.addEventListener("click", function(){players[i].rolls++;players[i].d6 = rollDie(6);checkEndGame(players[i].d6, i);});
		players[i].d7Button.addEventListener("click", function(){players[i].rolls++;players[i].d7 = rollDie(7);checkEndGame(players[i].d7, i);});
		players[i].d120Button.addEventListener("click", function(){players[i].rolls++;players[i].d120 = rollDie(120);checkEndGame(players[i].d120, i);});
		players[i].skipButton.addEventListener("click", function(){players[i].rolls++;checkEndGame(0, i);});
	}
}
function checkEndGame(rollVal, playerNum){
	updateRack(playerNum);
	if(rollVal == 0){
		players[playerNum].display.innerHTML += "--------- Turn Skipped\n"
	}else{
		players[playerNum].display.innerHTML+= "You've Rolled a " + rollVal +"\n";
	}
	if(players[playerNum].rolls==3){
		players[playerNum].score = getPlayerScore(playerNum);
	}
}
function getPlayerScore(playerNum){
	let factors = [];
	let score = 0;
	if(players[playerNum].d120%players[playerNum].d3 === 0){
		factors.push(players[playerNum].d3);
	}
	if(players[playerNum].d120%players[playerNum].d4 === 0){
		factors.push(players[playerNum].d4);
	}
	if(players[playerNum].d120%players[playerNum].d5 === 0){
		factors.push(players[playerNum].d5);
	}
	if(players[playerNum].d120%players[playerNum].d6 === 0){
		factors.push(players[playerNum].d6);
	}
	if(players[playerNum].d120%players[playerNum].d7 === 0){
		factors.push(players[playerNum].d7);
	}
	score = factors.length*10;
	let straightCount = 0; 
	factors.sort();//since all single digit is equivelent if sorted as string (WIN)
	for(let i = 0; i <factors.length-1; i++){
		if(factors[i]+1 === factors[i+1] || factors[i] === factors[i+1]){
			straightCount++;
		}
	} 
	if(straightCount == (factors.length-1) && factors.length>2){
		score+=100;
	}
	
	players[playerNum].s = score; 
	players[playerNum].display.innerHTML += "---------------------------\n"; 
	players[playerNum].display.innerHTML += "FINAL SCORE: " + score + "\n"; 
	players[playerNum].display.innerHTML += "---------------------------\n";
	if((players[0].s !== 1) && (players[1].s !== 1)){
		if(players[0].s > players[1].s){
			alert("Player 1 Wins!");
		}else if(players[0].s < players[1].s){
			alert("Player 2 Wins!");
		}else{
			alert("Tie");
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
		d3img: document.getElementById("p1Dice3"),
		d4img: document.getElementById("p1Dice4"),
		d5img: document.getElementById("p1Dice5"),
		d6img: document.getElementById("p1Dice6"),
		d7img: document.getElementById("p1Dice7"),
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
		display:document.getElementById("p2rolls"),
		d3Button: document.getElementById("p2d3Btn"),
		d4Button: document.getElementById("p2d4Btn"),
		d5Button: document.getElementById("p2d5Btn"),
		d6Button: document.getElementById("p2d6Btn"),
		d7Button: document.getElementById("p2d7Btn"),
		d120Button: document.getElementById("p2d120Btn"),
		skipButton: document.getElementById("p2skipButton"),
		d3img: document.getElementById("p2Dice3"),
		d4img: document.getElementById("p2Dice4"),
		d5img: document.getElementById("p2Dice5"),
		d6img: document.getElementById("p2Dice6"),
		d7img: document.getElementById("p2Dice7"),
		d120txt: document.getElementById("p2Dice120")
	};
	players.push(player1);
	players.push(player2);
	players[0].innerHTML = "";
	players[1].innerHTML = "";
}
function updateRack(playerNum){

	switch(players[playerNum].d3){
		case 1:
			players[playerNum].d3img.src = "Dice1.png";
			break;
		case 2:
			players[playerNum].d3img.src = "Dice2.png";
			break;
		case 3:
			players[playerNum].d3img.src = "Dice3.png";
			break;
	}
	switch(players[playerNum].d4){
		case 1:
			players[playerNum].d4img.src = "Dice1.png";
			break;
		case 2:
			players[playerNum].d4img.src = "Dice2.png";
			break;
		case 3:
			players[playerNum].d4img.src = "Dice3.png";
			break;
		case 4:
			players[playerNum].d4img.src = "Dice4.png";
			break;
	}
	switch(players[playerNum].d5){
		case 1:
			players[playerNum].d5img.src = "Dice1.png";
			break;
		case 2:
			players[playerNum].d5img.src = "Dice2.png";
			break;
		case 3:
			players[playerNum].d5img.src = "Dice3.png";
			break;
		case 4:
			players[playerNum].d5img.src = "Dice4.png";
			break;
		case 5:
			players[playerNum].d5img.src = "Dice5.png";
			break;
	}
	switch(players[playerNum].d6){
		case 1:
			players[playerNum].d6img.src = "Dice1.png";
			break;
		case 2:
			players[playerNum].d6img.src = "Dice2.png";
			break;
		case 3:
			players[playerNum].d6img.src = "Dice3.png";
			break;
		case 4:
			players[playerNum].d6img.src = "Dice4.png";
			break;
		case 5:
			players[playerNum].d6img.src = "Dice5.png";
			break;
		case 6:
			players[playerNum].d6img.src = "Dice6.png";
			break;
	}
	switch(players[playerNum].d7){
		case 1:
			players[playerNum].d7img.src = "Dice1.png";
			break;
		case 2:
			players[playerNum].d7img.src = "Dice2.png";
			break;
		case 3:
			players[playerNum].d7img.src = "Dice3.png";
			break;
		case 4:
			players[playerNum].d7img.src = "Dice4.png";
			break;
		case 5:
			players[playerNum].d7img.src = "Dice5.png";
			break;
		case 6:
			players[playerNum].d7img.src = "Dice6.png";
			break;
		case 7:
			players[playerNum].d7img.src = "Dice7.png";
			break;
	}
	players[playerNum].d120txt.innerHTML = "               "+players[playerNum].d120;
}