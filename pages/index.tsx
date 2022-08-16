import type { NextPage } from "next";
import Head from "next/head";
import FeatherIcon from "feather-icons-react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoha Fard</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/circle.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img src="/profilePhoto.jpg" alt="" />
          <h1 className={styles.title}>ZOHA FARD</h1>
          <div>
            <p>
              I love building tools that are user-friendly, simple and
              delightful. I enjoy utilising latest technologies and patterns to
              do so!
            </p>
          </div>
          <div>
            <p>contact details:</p>
            <p>zohafard@gmail.com</p>
            <p>+34603524122</p>
            <div className={styles.social}>
              <FeatherIcon icon="linkedin" size="14" />
              <FeatherIcon icon="github" size="14" />
            </div>
          </div>
        </div>

        <div className={styles.location}>
          <FeatherIcon icon="map-pin" size="14" />
          <p>Currently in Amsterdam, Netherlands</p>
        </div>
        <div className={styles.body}>
          <div className={styles.work}>
            <h3>Work</h3>
            <div className={styles.divider}></div>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>propps</h3>
            </a>
            <div className={styles.divider} />
            <p>
              building responsive UI features in react app with typescript.
              Taking responsibility for the design system and some of the
              feature designs.
            </p>

            <div className={styles.divider} />
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Eatfirst</h3>
            </a>
            <div className={styles.divider} />
            <p>
              building responsive UI features in react app with typescript.
              Taking responsibility for the design system and some of the
              feature designs.
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
};

export default Home;
