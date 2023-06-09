import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Headline.module.css'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {

  useEffect(() => {
    // console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // console.log("アンマウント時");

      document.body.style.backgroundColor = "";
    };
  }, []);


  return (
    <>
        <div className={styles.description}>
          <p>
            {props.title}:
            Get started by editing&nbsp;
            {props.children}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
    </>
  )
}
