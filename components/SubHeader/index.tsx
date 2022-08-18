import FeatherIcon from "feather-icons-react";
import styles from "./sub-header.module.scss";

export function SubHeader() {
  return (
    <div className={styles.information}>
      <div className={styles.location}>
        <p>Built with Next.js, Tailwind and Vercel</p>
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
