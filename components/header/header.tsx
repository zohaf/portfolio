import styles from "./header.module.scss";
import FeatherIcon from "feather-icons-react";

export function Header() {
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
      <div className={styles.profileImage}>
        <img src="/profilePhoto.jpg" alt="" />
      </div>
    </div>
  );
}
