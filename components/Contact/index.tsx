import FeatherIcon from "feather-icons-react";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={styles.information}>
      {/* <p>Built with Next.js, Tailwind and Vercel</p> */}
      <div className={styles.location}>
        <FeatherIcon icon="map-pin" size="14" />
        <p>Currently in Amsterdam, Netherlands</p>
      </div>

      <div className={styles.social}>
        <FeatherIcon icon="phone" size="16" />
        <FeatherIcon icon="mail" size="16" />
        <FeatherIcon icon="linkedin" size="16" />
        <FeatherIcon icon="github" size="16" />
      </div>
    </div>
  );
}
