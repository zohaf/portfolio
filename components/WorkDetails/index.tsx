import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";
import { Card } from "../Card";
import { Container } from "../Container";
import { ProppsLogo } from "../Icons";

import styles from "./WorkDetails.module.scss";

type WorkDetailsProps = {
  companyName: string;
  header: { title: string; detail: String };
  images: String[];
  description: { title: string; items: String[] };
  imageSizes: {
    width: number;
    height: number;
  };
};

export const WorkDetails: FC<WorkDetailsProps> = ({
  companyName,
  header,
  images,
  description,
  imageSizes,
}) => {
  return (
    <Container>
      <Link href="/">
        <FeatherIcon className={styles.back__btn} icon="arrow-left" size="14" />
      </Link>
      <Card>
        <Card.Header
          title={{ type: "text", text: header.title }}
          detail={header.detail}
          logo={<ProppsLogo />}
          divider
        />
        <Card.Body>
          <br />
          <div
            className={styles.wrapper}
            style={{ "--wrapper-max-height": `${imageSizes.height}px` }}
          >
            {images.map((imagePath, index) => {
              return (
                <>
                  <Image
                    key={index}
                    src={`/${companyName}_${imagePath}.png`}
                    alt="added features to the app"
                    width={imageSizes.width}
                    height={imageSizes.height}
                    layout="responsive"
                  />
                  <br />
                </>
              );
            })}
          </div>
          <div className={styles.text}>
            <p>{description.title}</p>
            <ul>
              {description.items.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
