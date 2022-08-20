import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Work } from "../components/Work";
import { Container } from "../components/Container";
import { Education } from "../components/Education";

const Home: NextPage = () => (
  <Container>
    <Header
      image={{
        src: "/profilePhoto.jpg",
        alt: "profile photo",
        width: 128,
        height: 128,
      }}
    />
    <div className={styles.body}>
      <Work />
      <Education />
    </div>
  </Container>
);

export default Home;
