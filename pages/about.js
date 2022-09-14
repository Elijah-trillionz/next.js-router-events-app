import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About us - NotePad</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.description}>
          We are simple humans with pets. You got a pet?
          <br />
          <br /> <a href='#'>JOIN US</a>
        </p>
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
