export const playGame = ({
    playerGesture
}) => {
    let gameResult = {
        winner: '',
        draw: false,
    }
    
    const gestures = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    const randomNumber = Math.floor(Math.random() * Math.floor(5)) 

    let computerGesture = gestures[randomNumber]

    switch(computerGesture) {
        case 'rock': {
            if (playerGesture === 'rock') { gameResult.draw = true }
            else if (playerGesture === 'paper' || playerGesture === 'spock') {
                gameResult.winner = 'player'
            } else {
                gameResult.winner = 'computer'
            }

            return gameResult
        }
        case 'paper': {
            if (playerGesture === 'paper') { gameResult.draw = true }
            else if (playerGesture === 'lizard' || playerGesture === 'scissors') {
                gameResult.winner = 'player'
            } else {
                gameResult.winner = 'computer'
            }

            return gameResult
        }
        case 'scissors': {
            if (playerGesture === 'scissors') { gameResult.draw = true }
            else if (playerGesture === 'rock' || playerGesture === 'spock') {
                gameResult.winner = 'player'
            } else {
                gameResult.winner = 'computer'
            }

            return gameResult
        }
        case 'lizard': {
            if (playerGesture === 'lizard') { gameResult.draw = true }
            else if (playerGesture === 'rock' || playerGesture === 'scissors') {
                gameResult.winner = 'player'
            } else {
                gameResult.winner = 'computer'
            }

            return gameResult
        }
        case 'spock': {
            if (playerGesture === 'spock') { gameResult.draw = true }
            else if (playerGesture === 'lizard' || playerGesture === 'paper') {
                gameResult.winner = 'player'
            } else {
                gameResult.winner = 'computer'
            }

            return gameResult
        }
        default: {
            return gameResult
        }
    }
}
