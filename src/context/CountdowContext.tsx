import { useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { CountdownContextData, ProviderProps } from '../utils/Interfaces'
import { ChallengeContext } from './ChallengesContext';

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export default function ContdownProvider ({ children }: ProviderProps ) {

    const [time, setTime] = useState(10 * 60);
    const [isActice, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)
    const { startNewChallenge } = useContext(ChallengeContext)
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(10 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if (isActice && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActice && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
            
        }
    }, [isActice, time])

    const store = {
        minutes,
        seconds,
        hasFinished,
        isActice,
        startCountdown,
        resetCountdown
    }

    return (
        <CountdownContext.Provider value={store}>
            { children }
        </CountdownContext.Provider>
    )
}