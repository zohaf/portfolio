import Link from "next/link";
import type { NextPage } from "next";
import styles from "./propps.module.scss";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { ProppsLogo } from "../../components/Icons";

const Propps: NextPage = () => (
  <Container>
    <Link href="/">
      <FeatherIcon className={styles.back__btn} icon="arrow-left" size="14" />
    </Link>
    <Card>
      <Card.Header
        title={{ type: "text", text: "Junior Front-end Developer" }}
        detail=""
        logo={<ProppsLogo />}
        divider
      />
      <Card.Body>
        <br />
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src="/propps_listings.png"
            alt="propps demo"
            width={566}
            height={376}
          />
          <br />
          <Image
            className={styles.image}
            src="/propps_offers.png"
            alt="propps demo"
            width={566}
            height={376}
          />
          <br />
          <Image
            className={styles.image}
            src="/propps_inviteBuyer.png"
            alt="propps demo"
            width={566}
            height={376}
          />
          <br />
          <Image
            className={styles.image}
            src="/propps_actionOffer.png"
            alt="propps demo"
            width={566}
            height={376}
          />
          <br />
          <Image
            className={styles.image}
            src="/propps_agentcards.png"
            alt="propps demo"
            width={566}
            height={376}
          />
          <br />
        </div>
        <p className={styles.text}>
          As part of the tech team at Propps, my day to day looked like:
          <ul>
            <li>
              {" "}
              working with the product and design team to define and implement
              new features
            </li>
            <li>
              {" "}
              expanding and maintaining our unified component library, design
              system, and various open source libraries
            </li>
            <li>
              {" "}
              working with the sales team to build and integrate tools that help
              grow our acquisition channels
            </li>
            <li> Learning TDD and writing tests</li>
          </ul>
        </p>
      </Card.Body>
    </Card>
  </Container>
);

export default Propps;
