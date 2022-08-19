import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { WorkHistory } from "../components/WorkHistory";
import { Container } from "../components/Container";

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Zoha Fard</title>
      <meta name="description" content="portfolio" />
      <link rel="icon" href="/circle.svg" />
    </Head>

    <main className={styles.main}>
      <br />
      <br />
      <br />
      <Header
        image={{
          src: "/profilePhoto.jpg",
          alt: "profile photo",
          width: 128,
          height: 128,
        }}
      />
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
  </Container>
);

export default Home;
