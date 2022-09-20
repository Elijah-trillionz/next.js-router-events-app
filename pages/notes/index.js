import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Notes = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>All notes - NotePad</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>All Notes Created</h1>
        <p className={styles.description}>
          No new notes can be created any further, achieve the these ones first,
          don not rush 😂 <br />
          Besides we do not have free storage for you anymore
        </p>
        <div className={styles.grid}>
          <Link href='/notes/1'>
            <a className={styles.card}>
              <h2>Document 1 &rarr;</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque nam fugit fuga.
              </p>
            </a>
          </Link>

          <Link href='/notes/2'>
            <a className={styles.card}>
              <h2>Document 2 &rarr;</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                sint eos ad.
              </p>
            </a>
          </Link>

          <Link href='/notes/3'>
            <a className={styles.card}>
              <h2>Document 3 &rarr;</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium mollitia qui sapiente.
              </p>
            </a>
          </Link>

          <Link href='/notes/4'>
            <a className={styles.card}>
              <h2>Document 4 &rarr;</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis praesentium hic at!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Notes;

export const getServerSideProps = async () => {
  await new Promise((res) => {
    setTimeout(res, 3500);
  });

  return { props: {} };
};
