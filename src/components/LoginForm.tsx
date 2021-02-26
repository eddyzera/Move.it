import { useSession, signIn, signOut } from 'next-auth/client'
import style from '../styles/components/LoginForm.module.css'

export default function LoginForm() {
    const [session] = useSession()
    return (
        <div id={style.loginForm}>
            {!session && (
                <div>
                  <img src="favicon.png" alt=""/>
                  <button onClick={(): Promise<void> => signIn('facebook', {callbackUrl: 'http://localhost:3000/home'})}>
                    Entrar
                  </button>
                </div>
            )}
            {session && (
                <div>
                  <img src="favicon.png" alt=""/>
                  <button onClick={(): Promise<void> => signOut()}>
                    Sair
                  </button>
                </div>
            )}
        </div>
    )
}