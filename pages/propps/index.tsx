import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FeatherIcon from "feather-icons-react";
import { WorkHistory } from "../../components/WorkHistory";
import { Container } from "../../components/Container";

const Propps: NextPage = () => (
  <Container>
    <Head>
      <title>Zoha Fard</title>
      <meta name="description" content="portfolio" />
      <link rel="icon" href="/circle.svg" />
    </Head>
    <main className={styles.main}>
      <div className={styles.body}>
        <Link href="/">
          <FeatherIcon icon="arrow-left" size="14" />
        </Link>
        <WorkHistory />
      </div>
    </main>
  </Container>
);

export default Propps;
