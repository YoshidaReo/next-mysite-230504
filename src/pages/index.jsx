import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import {Headline} from '../components/Headline'
import {Links} from '../components/Links'
import {Header} from '../components/Header'
import {Content} from '../components/Content'
import { useCallback, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  const [count, setCount] = useState(1);
  // let foo = 1;

  // メソットを書くのはコンポーネント内外に書く。内部で引数を再レンダリングしないようするためにuseCallbackを使う。
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // "マウント時"
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // "アンマウント時(空配列のみ.それ以外は最初に処理される)"
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
        <Header />
        <h1>
          {count}
        </h1>

        <button
          href='/about'
          onClick={handleClick}
        >
          ボタン
        </button>

        <Headline title="Main">
          <code className={styles.code}>pages/Main.js</code>
        </Headline>


        <Links />
        
        <Content />

      </main>

    </>
  )
}