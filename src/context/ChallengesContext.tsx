import { createContext, useState, useEffect } from 'react'
import { ChallengesContextData, ProviderProps } from '../utils/Interfaces'
import challenges from '../../challenges.json'

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengeProvider ({ children }: ProviderProps) {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    useEffect(() => {
        Notification.requestPermission()
    }, [])    

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience > experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo Desafio = )', {
                body: `Valendo ${challenge.amount}xp !!!`
            })
        }
    }

    const store = {
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengeContext.Provider value={store}>
            { children }
        </ChallengeContext.Provider>
    )
}