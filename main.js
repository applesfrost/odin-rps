const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie'
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return 'Tie'
    }
    else if (result == 'Player'){
        return `You Win ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose ${computerSelection} beats ${playerSelection}`
    } 

}

function getPlayerChoice(){
    let validatedInpute = false;
    while(validatedInpute == false){
        const choice = prompt('rock paper scissors');
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInpute = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++;){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('----------------------');
        if(checkWinner(playerSelection, computerSelection) == 'Player'){
            scorePlayer++
        }
        else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
            scoreComputer++
        }
    }
    console.log('game over')
    if(scorePlayer > scoreComputer){
        console.log('player wins');
    }
    else if(scorePlayer < scoreComputer){
        console.log('computer wins');
    }
    else{
        console.log('game tied');
    }
}