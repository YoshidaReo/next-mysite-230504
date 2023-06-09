import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import {Headline} from '../components/Headline'
import {Links} from '../components/Links'
import {Header} from '../components/Header'
import {Content} from '../components/Content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About App</title>
      </Head>

      <Header />

      <main className={styles.main}>

        <Headline title="about">
          <code className={styles.code}>pages/about.js</code>
        </Headline>

        <Links />
        
        <Content />

      </main>

    </>
  )
}
