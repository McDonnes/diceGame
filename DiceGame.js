let p1display = document.getElementById("p1rolls");
let p2display = document.getElementById("p2rolls");
let p1d3Button = document.getElementById("p1d3Btn");
let p1d4Button = document.getElementById("p1d4Btn");
let p1d5Button = document.getElementById("p1d5Btn");
let p1d6Button = document.getElementById("p1d6Btn");
let p1d7Button = document.getElementById("p1d7Btn");
let p1d120Button = document.getElementById("p1d120Btn");
let p1skipButton = document.getElementById("p1skipButton");
let p2d3Button = document.getElementById("p2d3Btn");
let p2d4Button = document.getElementById("p2d4Btn");
let p2d5Button = document.getElementById("p2d5Btn");
let p2d6Button = document.getElementById("p2d6Btn");
let p2d7Button = document.getElementById("p2d7Btn");
let p2d120Button = document.getElementById("p2d120Btn");
let p2skipButton = document.getElementById("p2skipButton");
let player1 = {
	name: "Player 1",
	d3: 0,
	d4: 0,
	d5: 0,
	d6: 0,
	d7: 0,
	d120: 0,
	rolls: 0			
};
let player2 = {
	name: "Player 2",
	d3: 0,
	d4: 0,
	d5: 0,
	d6: 0,
	d7: 0,
	d120: 0,
	rolls: 0
};

startGame();

function startGame(){
	initialRoll();
	trackRolls();
}
function initialRoll(){
	player1.d3 = rollDie(3, player1.name);
	player1.d4 = rollDie(4, player1.name);
	player1.d5 = rollDie(5, player1.name);
	player1.d6 = rollDie(6, player1.name);
	player1.d7 = rollDie(7, player1.name);
	player1.d120 = rollDie(120, player1.name);
	player2.d3 = rollDie(3, player2.name);
	player2.d4 = rollDie(4, player2.name);
	player2.d5 = rollDie(5, player2.name);
	player2.d6 = rollDie(6, player2.name);
	player2.d7 = rollDie(7, player2.name);
	player2.d120 = rollDie(120, player2.name);
	p1display.innerHTML = "---------------------------\nInitial Rolls.....";
	Player1Display(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	p1display.innerHTML += "\n"
	p2display.innerHTML = "---------------------------\nInitial Rolls.....";
	Player2Display(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	p2display.innerHTML += "\n"
}
function Player1Display(name, d3, d4, d5, d6, d7, d120){
	p1display.innerHTML += "\n" + name + ":\n";
	p1display.innerHTML += "-------3D-----4D-----5D-----6D-----7D-------120D--------\n";
	p1display.innerHTML += "Dice:   ["+d3+ "]        [" +d4+ "]       ["+d5+ "]        ["+d6+ "]        ["+d7+ "]          ["+d120+ "]\n";
}
function Player2Display(name, d3, d4, d5, d6, d7, d120){
	p2display.innerHTML += "\n" + name + ":\n";
	p2display.innerHTML += "-------3D-----4D-----5D-----6D-----7D-------120D--------\n";
	p2display.innerHTML += "Dice:   ["+d3+ "]        [" +d4+ "]       ["+d5+ "]        ["+d6+ "]        ["+d7+ "]          ["+d120+ "]\n";
}
function trackRolls(){
	p1d3Button.addEventListener("click", function(){player1.rolls++;player1.d3 = rollDie(3, player1.name);checkEndGameP1();});
	p1d4Button.addEventListener("click", function(){player1.rolls++;player1.d4 = rollDie(4, player1.name);checkEndGameP1();});
	p1d5Button.addEventListener("click", function(){player1.rolls++;player1.d5 = rollDie(5, player1.name);checkEndGameP1();});
	p1d6Button.addEventListener("click", function(){player1.rolls++;player1.d6 = rollDie(6, player1.name);checkEndGameP1();});
	p1d7Button.addEventListener("click", function(){player1.rolls++;player1.d7 = rollDie(7, player1.name);checkEndGameP1();});
	p1d120Button.addEventListener("click", function(){player1.rolls++;player1.d120 = rollDie(120, player1.name);checkEndGameP1();});
	p1skipButton.addEventListener("click", function(){player1.rolls++;p1display.innerHTML = "--------- Turn Skipped\n";checkEndGameP1();});

	p2d3Button.addEventListener("click", function(){player2.rolls++;player2.d3 = rollDie(3, player2.name);checkEndGameP2();});
	p2d4Button.addEventListener("click", function(){player2.rolls++;player2.d4 = rollDie(4, player2.name);checkEndGameP2();});
	p2d5Button.addEventListener("click", function(){player2.rolls++;player2.d5 = rollDie(5, player2.name);checkEndGameP2();});
	p2d6Button.addEventListener("click", function(){player2.rolls++;player2.d6 = rollDie(6, player2.name);checkEndGameP2();});
	p2d7Button.addEventListener("click", function(){player2.rolls++;player2.d7 = rollDie(7, player2.name);checkEndGameP2();});
	p2d120Button.addEventListener("click", function(){player2.rolls++;player2.d120 = rollDie(120, player2.name);checkEndGameP2();});
	p2skipButton.addEventListener("click", function(){player2.rolls++;display.innerHTML = "--------- Turn Skipped\n";checkEndGameP2();});
}

function rollDie(numSides, playerName){
	let result = die(numSides);
	if(playerName == player1.name){
		p1display.innerHTML += "\n--------- You Rolled: " + result;
	}else if(playerName == player2.name){
		p2display.innerHTML += "\n--------- You Rolled: " + result;
	}
	return result;
}
function die(numSides){
	let min = 1;
	let result = Math.floor(Math.random()*(numSides+1 - min) + min);
	return result;
}
function checkEndGameP1(){
	Player1Display(player1.name, player1.d3, player1.d4, player1.d5, player1.d6, player1.d7, player1.d120);
	if(player1.rolls==3){
		getPlayer1Score();
	}
}
function checkEndGameP2(){
	Player2Display(player2.name, player2.d3, player2.d4, player2.d5, player2.d6, player2.d7, player2.d120);
	if(player2.rolls==3){
		getPlayer2Score();
	}
}
function getPlayer1Score(){
	let factors = [];
	let score = 0;
	if(player1.d120%player1.d3 == 0){
		factors.push(player1.d3);
	}
	if(player1.d120%player1.d4 == 0){
		factors.push(player1.d3);
	}
	if(player1.d120%player1.d5 == 0){
		factors.push(player1.d3);
	}
	if(player1.d120%player1.d6 == 0){
		factors.push(player1.d3);
	}
	if(player1.d120%player1.d7 == 0){
		factors.push(player1.d3);
	}
	score = factors.length*10;
	let straightCount = 0; 
	factors.sort();//since all single digit is equivelent if sorted as string (WIN)
	for(let i = 0; i <factors.length-1; i++){
		if(factors[i]+1 == factors[i+1]){
			straightCount+=100;
		}
	} 
	if(straightCount ==  factors.length && factors.length!=0){
		score+=1;
	}
	p1display.innerHTML += "-------------------------------------------\n"; 
	p1display.innerHTML += "--------- FINAL SCORE: " + score + "\n"; 

	p1d3Button.removeEventListener("click", function(){player1.rolls++;player1.d3 = rollDie(3, player1.name);checkEndGameP1();});
	p1d4Button.removeEventListener("click", function(){player1.rolls++;player1.d4 = rollDie(4, player1.name);checkEndGameP1();});
	p1d5Button.removeEventListener("click", function(){player1.rolls++;player1.d5 = rollDie(5, player1.name);checkEndGameP1();});
	p1d6Button.removeEventListener("click", function(){player1.rolls++;player1.d6 = rollDie(6, player1.name);checkEndGameP1();});
	p1d7Button.removeEventListener("click", function(){player1.rolls++;player1.d7 = rollDie(7, player1.name);checkEndGameP1();});
	p1d120Button.removeEventListener("click", function(){player1.rolls++;player1.d120 = rollDie(120, player1.name);checkEndGameP1();});
	p1skipButton.removeEventListener("click", function(){player1.rolls++;p1display.innerHTML = "--------- Turn Skipped\n";checkEndGameP1();});
}
function getPlayer2Score(){
	let factors = [];
	let score = 0;
	if(player2.d120%player2.d3 == 0){
		factors.push(player2.d3);
	}
	if(player2.d120%player2.d4 == 0){
		factors.push(player2.d3);
	}
	if(player2.d120%player2.d5 == 0){
		factors.push(player2.d3);
	}
	if(player2.d120%player2.d6 == 0){
		factors.push(player2.d3);
	}
	if(player2.d120%player2.d7 == 0){
		factors.push(player2.d3);
	}
	score = factors.length*10;
	let straightCount = 0; 
	factors.sort();//since all single digit is equivelent if sorted as string (WIN)
	for(let i = 0; i <factors.length-1; i++){
		if(factors[i]+1 == factors[i+1]){
			straightCount+=100;
		}
	} 
	if(straightCount ==  factors.length){
		score+=1;
	}
	p2display.innerHTML += "-------------------------------------------\n"; 
	p2display.innerHTML += "--------- FINAL SCORE: " + score + "\n"; 
}