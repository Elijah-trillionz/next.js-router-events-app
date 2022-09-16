import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const About = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  const joinUs = () => {
    router.push('?member=true', '', { shallow: true });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>About us - NotePad</title>
      </Head>
      <main className={styles.main}>
        {router.query?.member ? (
          <>
            <h1 className={styles.title}>Great!! You are one of us</h1>
            <p className={styles.description}>
              From a friend: How is it going?
              <br />
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.description}>
              We are simple humans with pets. You got a pet?
              <br />
              <br /> <button onClick={joinUs}>JOIN US</button>
            </p>
          </>
        )}
      </main>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  return { props: {} };
};
