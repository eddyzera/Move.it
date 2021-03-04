import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import { useSession } from 'next-auth/client'

export default function Profile () {

    const [session] = useSession()

    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            {
                session && (
                    <>
                        <img src={session.user.image} alt={session.user.name}/>
                        <div>
                            <strong>{session.user.name}</strong>
                            <p>
                                <img src="icons/level.svg" alt="level - up"/>
                                Level {level}
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}