import styles from "./header.module.scss";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import type { FC } from "react";

type HeaderProps = {
  image?: ImageProps;
};

export const Header: FC<HeaderProps> = ({ image }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div>
          <h1>ZOHA FARD</h1>
          <div className={styles.location}>
            <FeatherIcon icon="map-pin" size="14" />
            <p>Currently in Amsterdam, Netherlands</p>
          </div>
        </div>
        <p>
          I love building tools that are user-friendly, simple and delightful. I
          enjoy utilising latest technologies and patterns to do so!
        </p>
      </div>
      {image && (
        <div className={styles.profileImage}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      )}
    </div>
  );
};
