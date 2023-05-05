import { Inter } from 'next/font/google';
import Link from 'next/link';
import classes from "src/components/Header/Header.module.css";

const inter = Inter({ subsets: ['latin'] })

export function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <p className={classes.anchor}>Index</p>
        </Link>
        <Link href="/about">
          <p className={classes.anchor}>About</p>
        </Link>
      </header>
    </>
  )
}
