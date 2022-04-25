const computer = document.getElementById('computer');
const player = document.getElementById('player');
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
const choices = ['rock', 'paper', 'scissor'];
let computerChoice;
let playerChoice;
let result;
possibleChoices.forEach(button => button.addEventListener("click", (event) => {
	playerChoice = event.target.id;
	player.textContent = playerChoice;
	generateComputerChoice();
	getResult();
}));

function generateComputerChoice() {	
	let i = Math.floor(Math.random() * choices.length);
	computerChoice = choices[i];
	computer.textContent = computerChoice;
};

function getResult() {
	if (playerChoice === computerChoice) {
		result = "It's A Tie, Pick Again"
	} else if (playerChoice === 'rock' && computerChoice === 'paper') {
		result = "You Lost!";
	} else if (playerChoice === "rock" && computerChoice === 'scissor') {
		result = "You Win!";
	} else if (playerChoice === "paper" && computerChoice === 'rock') {
		result = "You Win!";
	} else if (playerChoice === "paper" && computerChoice === 'scissor') {
		result = "You Lost!";
	} else if (playerChoice === "scissor" && computerChoice === 'rock') {
		result = "You Lost!";
	} else if (playerChoice === "scissor" && computerChoice === 'paper') {
		result = "You Win!";
	}
	resultDisplay.textContent = result;
};