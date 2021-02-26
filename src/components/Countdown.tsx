import { useContext } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { CountdownContext } from '../context/CountdowContext';


export default function Countdown() {

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActice, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)
    
    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={`${styles.countdownButton}`} 
                >
                    Ciclo encerrado
                </button>
            ): (
                <>
                    { isActice ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            onClick={() => resetCountdown()}
                        >
                            Abandonar clico
                        </button>
                    ) : (
                        <button 
                            type="button" className={styles.countdownButton} 
                            onClick={() => startCountdown()}
                        >
                            Inicar um ciclo
                        </button>
                    )}
                </>
            ) }
        </div>
    )
}