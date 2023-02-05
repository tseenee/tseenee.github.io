import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Hello() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Sain baina uu yortontsoo
    </div>
  );
}
