import { Inter } from 'next/font/google'
import styles from './Content.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs →",
    description: "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates →",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
]

export function Content() {
  return (
    <>
        <div className={styles.grid}>
          {ITEMS.map((item) => {
            return (
              <a key={item.href}
                href={item.href}
                className={styles.card}
              >
                <h2 className={inter.className}>
                  {item.title}
                </h2>
                <p className={inter.className}>
                  {item.description}
                </p>
              </a>
            )
          })}

        </div>
    </>
  )
}
