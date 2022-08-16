import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header/header";
import styles from "../styles/Home.module.css";
import { SubHeader } from "../components/sub-header/sub-header";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Zoha Fard</title>
      <meta name="description" content="portfolio" />
      <link rel="icon" href="/circle.svg" />
    </Head>

    <main className={styles.main}>
      <br />
      <br />
      <br />
      <Header />
      <br />
      <br />
      {/* <SubHeader /> */}
      <div className={styles.body}>
        <div className={styles.work}>
          <h3>Work</h3>
          <div className={styles.divider}></div>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>propps</h3>
          </a>
          <div className={styles.divider} />
          <p>
            building responsive UI features in react app with typescript. Taking
            responsibility for the design system and some of the feature
            designs.
          </p>

          <div className={styles.divider} />
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Eatfirst</h3>
          </a>
          <div className={styles.divider} />
          <p>
            building responsive UI features in react app with typescript. Taking
            responsibility for the design system and some of the feature
            designs.
          </p>
        </div>
        <div>
          <br />
          <br />
          <br />
          <h3>Education</h3>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <p>General Assembly</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <p>University of Newcastle</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <p>University of New South Wales</p>
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
