import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { ProppsLogo } from "../../components/Icons";

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
        <Card>
          <Card.Header
            title={{ type: "text", text: "Front-end" }}
            detail=""
            logo={<ProppsLogo />}
          />
          <Card.Body>
            <br />
            <Image
              src="/propps-1.png"
              alt="propps demo"
              width={480}
              height={254.31}
            ></Image>
            <p>
              building responsive UI features in react app with typescript.
              Taking responsibility for the design system and some of the
              feature designs.
            </p>
          </Card.Body>
        </Card>
      </div>
    </main>
  </Container>
);

export default Propps;
