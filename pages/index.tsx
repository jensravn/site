import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Jens Ravn</title>
        <meta name="meta name" content="meta content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>JR Blog</h1>

        <div className={styles.grid}>
          <div className={styles.post}>Post 1</div>
          <div className={styles.post}>Post 2</div>
          <div className={styles.post}>Post 3</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
