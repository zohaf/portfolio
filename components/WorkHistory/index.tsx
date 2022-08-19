import Link from "next/link";
import styles from "./work-history.module.scss";

export function WorkHistory() {
  return (
    <div className={styles.section}>
      <h2>Work</h2>
      <div className={styles.divider} />
      <Link href="/Propps">
        <a className={styles.card}>
          <h3>Propps</h3>
          <h3>Remote, Australia | Sept 21 - Jul 22</h3>
        </a>
      </Link>
      <div className={styles.divider} />
      <p>
        building responsive UI features in react app with typescript. Taking
        responsibility for the design system and some of the feature designs.
      </p>
      <p>NextJS, React, TypeScript, GraphQL, jest + emotion</p>

      <div className={styles.divider} />
      <Link href="/Propps">
        <a className={styles.card}>
          <h3>Eatfirst</h3>
          <h3>Sydney, Australia | May 21 - Sept 21</h3>
        </a>
      </Link>
      <div className={styles.divider} />
      <p>
        Building test-driven UI library in a react app with typescript for a
        greenfield project.
      </p>
      <p>NextJS, React, TypeScript, jest + Tailwind</p>
    </div>
  );
}
