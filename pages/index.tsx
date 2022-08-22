import type { NextPage } from "next";
import Header from "../components/Header";
import { Work } from "../components/WorkHistory";
import { Education } from "../components/Education";
import { Container } from "../components/Container";
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
    <div>
      <Work />
      <Education />
    </div>
  </Container>
);

export default Home;
