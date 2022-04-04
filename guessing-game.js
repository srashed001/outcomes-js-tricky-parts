function guessingGame() {
    const randInt = Math.floor(Math.random() * 100);
    let numGuess = 0;
    let gameOver = false;

    return function game(guess){
        if(gameOver) return `The game is over, you already won!`

        const result = guess - randInt;
        numGuess ++

        if(result === 0){
            gameOver = true;
            return `You win! You found ${randInt} in ${numGuess} ${numGuess > 1 ? 'guesses' : 'guess'}.`
        }

        return `${guess} is too ${result < 0 ? 'low' : 'high'}!`
    }

}

module.exports = { guessingGame };
