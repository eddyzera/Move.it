import { createContext, useState, useEffect } from 'react'
import { ChallengesContextData, ProviderPropsChallenge } from '../utils/Interfaces'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import LevelUpModal from '../components/LevelUpModal'

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengeProvider ({ children, ...rest }: ProviderPropsChallenge) {

    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    const [isLevelUp, setIslevelUp] = useState(false)


    useEffect(() => {
        Notification.requestPermission()
    }, [])    


    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [
        level, 
        currentExperience, 
        challengesCompleted
    ])

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

    function closeLevelUpModal() {
        setIslevelUp(false)
    }

    function levelUp() {
        setLevel(level + 1)
        setIslevelUp(true)
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
        completeChallenge,
        closeLevelUpModal
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengeContext.Provider value={store}>
            { children }

            { isLevelUp && <LevelUpModal /> }
        </ChallengeContext.Provider>
    )
}