import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header/header";
import styles from "../styles/Home.module.css";
import { SubHeader } from "../components/sub-header/sub-header";
import { WorkHistory } from "../components/work-history/work-history";

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
        <div>
          <WorkHistory />
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
