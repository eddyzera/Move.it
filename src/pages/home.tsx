import { GetServerSideProps } from 'next'
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";
import Head from 'next/head'
import ChallengeBox from "../components/ChallengeBox";
import ContdownProvider from "../context/CountdowContext";
import { ChallengeProvider } from '../context/ChallengesContext';
import { HomeProps } from '../utils/Interfaces';

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { 
    level, 
    currentExperience, 
    challengesCompleted 
  } = ctx.req.cookies

  return {
    props : {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
