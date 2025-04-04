const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const gamesPlayed = document.querySelector('#games-played');

let humanScoreNumber = localStorage.getItem('humanScore') || 0;
let machineScoreNumber = localStorage.getItem('machineScore') || 0;
let gamesPlayedNumber = localStorage.getItem('gamesPlayed') || 0;

humanScore.textContent = humanScoreNumber;
machineScore.textContent = machineScoreNumber;
gamesPlayed.textContent = gamesPlayedNumber;

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

const playTheGame = (human, machine) => {
    gamesPlayedNumber++;
    gamesPlayed.textContent = gamesPlayedNumber;
    localStorage.setItem('gamesPlayed', gamesPlayedNumber);

    if (human === machine) {
        result.textContent = "Empate";
        result.className = 'result draw';
    } else if (
        (human === 'paper' && machine === 'rock') || 
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')) {
        
        humanScoreNumber++;
        humanScore.textContent = humanScoreNumber;
        localStorage.setItem('humanScore', humanScoreNumber);
        result.textContent = "Você Ganhou!";
        result.className = 'result win';
    } else {
        machineScoreNumber++;
        machineScore.textContent = machineScoreNumber;
        localStorage.setItem('machineScore', machineScoreNumber);
        result.textContent = "Você Perdeu!";
        result.className = 'result lose';
    }
}

const resetGame = () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    gamesPlayedNumber = 0;

    localStorage.setItem('humanScore', humanScoreNumber);
    localStorage.setItem('machineScore', machineScoreNumber);
    localStorage.setItem('gamesPlayed', gamesPlayedNumber);

    humanScore.textContent = humanScoreNumber;
    machineScore.textContent = machineScoreNumber;
    gamesPlayed.textContent = gamesPlayedNumber;
    result.textContent = "Vamos jogar!";
    result.className = 'result';
}
