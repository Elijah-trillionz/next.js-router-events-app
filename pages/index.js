import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [lastVisitedNote, setLastVisitedNote] = useState(false);

  useEffect(() => {
    const _lastVisitedNote = localStorage.getItem('last-visited-note');
    _lastVisitedNote && setLastVisitedNote(_lastVisitedNote);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage - Notepad</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NotePad <Link href='/'>Home Page!</Link>
        </h1>
        <span className={styles.description}>
          Where dreams are written into reality
        </span>
        <br />
        <br />
        <Link href='/notes'>View all notes</Link>
        {lastVisitedNote && (
          <>
            <br />
            <Link href={lastVisitedNote}>Your last viewed note</Link>
          </>
        )}
        <br />
        <Link href='/about'>The about page</Link>
      </main>
    </div>
  );
}
