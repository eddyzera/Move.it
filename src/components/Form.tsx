import { useSession, signIn } from 'next-auth/client'
import { useContext } from 'react'
import style from '../styles/components/LoginForm.module.css'
import { LoginContext } from '../context/LoginContext'
import { VscClose } from "react-icons/vsc";
import { 
  FaFacebookF, 
  FaGoogle, 
  FaGithub,
  FaTwitter
} from "react-icons/fa"


export default function Form() {

    const { closeForm } = useContext(LoginContext)

    const [session] = useSession()

    return (
      <div className={style.overlay}>
        <div className={style.container}>
            {!session && (
                <div className={style.facebook}>
                    <button onClick={(): Promise<void> => signIn('facebook', { callbackUrl: 'http://localhost:3000/home' })}>
                    <p>Facebook</p>
                    <FaFacebookF color="#FFF" />
                    </button>
                </div>
            )}
            {!session && (
                <div className={style.google}>
                  <button onClick={(): Promise<void> => signIn('google')}>
                  <p>Google</p>
                  <FaGoogle color="#FFF" />
                  </button>
                </div>
            )}

            {!session && (
                <div className={style.github}>
                  <button onClick={(): Promise<void> => signIn('github', { callbackUrl: 'http://localhost:3000/home' })}>
                  <p>Github</p>
                  <FaGithub color="#FFF" />
                  </button>
                </div>
            )}

            {!session && (
                <div className={style.twitter}>
                  <button onClick={(): Promise<void> => signIn('twitter')}>
                  <p>Twitter</p>
                  <FaTwitter color="#FFF" />
                  </button>
                </div>
            )}
            <button type="button" className={style.btnClone} onClick={closeForm}>
                <VscClose color="#FFF" size="2rem"/>
            </button>
        </div>
      </div>
    )
}