import { useRouter, withRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Note = ({ router }) => {
  const noteId = router.query?.id ? router.query.id : 0;

  const title = `Document ${noteId} - NotePad`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Document {noteId}</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt.
        </p>
        <div className={styles.grid}>
          <Link href='/notes'>
            <a className={styles.card}>
              <h2>&larr; All notes</h2>
            </a>
          </Link>
          <Link href='/'>
            <a className={styles.card}>
              <h2>&larr;&larr; Go home</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default withRouter(Note);

export const getServerSideProps = async () => {
  await new Promise((res) => {
    setTimeout(res, 1500);
  });

  return { props: {} };
};
