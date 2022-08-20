import type { NextPage } from "next";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Work } from "../components/Work";
import { Container } from "../components/Container";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";

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
    <Contact />
    <div className={styles.body}>
      <Work />
      <Education />
    </div>
  </Container>
);

export default Home;
