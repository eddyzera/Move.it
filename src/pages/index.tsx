import styles from '../styles/pages/Login.module.css'
import Head from 'next/head'
import { LoginProvider } from '../context/LoginContext'
import LoginForm from '../components/LoginForm'

export default function Login() {
  
  return (
    <LoginProvider>
      <div id={styles.loginContainer}>
        <Head>?
        </Head>
          <div className={styles.loginContainer}>
              <div className={styles.loginBanner}>
                  <img src="Simbolo.png" alt="Move.it"/>
              </div>
              <div className={styles.loginContainerForm}>
                <LoginForm />
              </div>
          </div>
      </div>
    </LoginProvider>
  )
}
