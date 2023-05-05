import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Links.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Links() {
  return (
    <>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={280}
            height={137}
            priority
          />
        </div>


    </>
  )
}
