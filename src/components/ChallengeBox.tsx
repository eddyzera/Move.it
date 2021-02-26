import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import style from '../styles/components/ChallengeBox.module.css'
import { CountdownContext } from '../context/CountdowContext'


export default function ChallengeBox () {

    const { 
        activeChallenge, 
        resetChallenge, 
        completeChallenge
    } = useContext(ChallengeContext)

    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handlreChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={style.challengeBoxcontainer}>

            { activeChallenge ? (
                <div className={style.challengActive} >
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>

                        <button 
                            type="button"
                            className={style.challengeFailedButton}
                            onClick={handlreChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={style.challengeSucceedeButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
                <div className={style.challengeNotActive} >
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            ) }

        </div>
    )
}