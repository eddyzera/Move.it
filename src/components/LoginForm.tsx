import { useSession, signIn, signOut } from 'next-auth/client'
import style from '../styles/components/LoginForm.module.css'

export default function LoginForm() {
    const [session, loading] = useSession()
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
            {loading && (
                <div>
                  <h1>Carregando...</h1>
                </div>
            )}
        </div>
    )
}