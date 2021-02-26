import styles from '../styles/components/CompletedChallanges.module.css'
import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'

export default function CompletedChallanges() {

    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <div className={styles.completedChallanges}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}