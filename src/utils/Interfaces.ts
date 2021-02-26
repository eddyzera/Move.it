import { ReactNode } from 'react'

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

export interface ProviderProps {
    children: ReactNode
}

export interface ChallengesContextData {
    level: number,
    levelUp: () => void;
    currentExperience: number,
    challengesCompleted: number,
    startNewChallenge: () => void;
    activeChallenge: Challenge,
    resetChallenge,
    experienceToNextLevel: number,
    completeChallenge: () => void,
}

export interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActice: boolean,
    startCountdown: () => void,
    resetCountdown: () => void
}