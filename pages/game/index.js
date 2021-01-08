import { useState } from "react";
import { play } from "./_helpers.js";
import styles from "../../styles/Game.module.css";

export default () => {
    const [ winner, setWinner ] = useState('')
    const [ draw, setDraw ] = useState(false)

    const playGame = gesture => {
        play(gesture).then(gameResult => {
            const maybeNull = !gameResult.draw && gameResult.winner !== '' 
                ? setWinner(gameResult.winner) 
                : null

            gameResult.draw && gameResult.winner === '' 
                ? setDraw(true)
                : maybeNull
        })  
    }

    if (winner) return (
        <div className={styles.container}>
        <h1 className={styles.winner}>{winner} wins!</h1>
        </div>  
    )

    if (draw) return (
        <div className={styles.container}>
        <h1 className={styles.winner}>draw!</h1>
        </div>
    )

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => playGame("rock")}>rock</button>
            <button className={styles.button} onClick={() => playGame("paper")}>paper</button>
            <button className={styles.button} onClick={() => playGame("scissors")}>scissors</button>
            <button className={styles.button} onClick={() => playGame("lizard")}>lizard</button>
            <button className={styles.button} onClick={() => playGame("spock")}>spock</button>
        </div>
    )
}
