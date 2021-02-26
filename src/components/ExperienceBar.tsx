import React, { useContext } from 'react'
import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengeContext } from '../context/ChallengesContext'

export default function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} ></div>
                <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}
