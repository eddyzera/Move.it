import styles from '../styles/pages/Login.module.css'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'

export default function Login() {
  
  return (
    <div id={styles.loginContainer}>
      <Head>
        <title>Inicio | Move.It</title>
      </Head>
        <div className={styles.loginContainer}>
            <div className={styles.loginBanner}>
                <img src="Logo.png" alt="Move.it"/>
                <img src="banner-login.png" alt="Banner - Move.it"/>
            </div>
            <div className={styles.loginContainerForm}>
              <LoginForm />
            </div>
        </div>
    </div>
  )
}
