import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export default function LoginForm () {

    const { OpenForm } = useContext(LoginContext)

    return (
        <>
            <img src="Logo.png" alt="" />
            <div>
                <h1>Bem-vindo</h1>
                    <h3>Faça seu login usando a sua conta das suas redes sociais preferidas</h3>
                    <button type="button" onClick={OpenForm} >
                        <img src="icons/arrow.svg" alt=""/>
                    </button>
            </div>
        </>
    )
}