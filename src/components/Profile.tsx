import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'

export default function Profile () {

    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/eddyzera.png" alt="Edgar Silva - Eddyzera"/>
            <div>
                <strong>Edgar Silva - Eddyzera</strong>
                <p>
                    <img src="icons/level.svg" alt="level - up"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}