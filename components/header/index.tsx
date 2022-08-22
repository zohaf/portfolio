import styles from "./Header.module.scss";
import Image from "next/image";
import type { ImageProps } from "next/image";
import type { FC } from "react";

type HeaderProps = {
  image?: ImageProps;
};

const Header: FC<HeaderProps> = ({ image }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>ZOHA FARD</h1>

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

export default Header;
