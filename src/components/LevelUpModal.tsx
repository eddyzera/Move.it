import { useContext } from 'react'
import style from '../styles/components/LevelUpModal.module.css'
import { ChallengeContext } from '../context/ChallengesContext'

export default function LevelUpModal () {

    const { level, closeLevelUpModal } = useContext(ChallengeContext)

    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar o modal" />
                </button>
            </div>
        </div>
    )
}