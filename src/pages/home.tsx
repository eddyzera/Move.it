import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";
import Head from 'next/head'
import ChallengeBox from "../components/ChallengeBox";
import ContdownProvider from "../context/CountdowContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <ExperienceBar />
      <ContdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </ContdownProvider>
    </div>
  )
}
