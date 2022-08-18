import styles from "./work-history.module.scss";

export function WorkHistory() {
  return (
    <div className={styles.work}>
      <h2>Work</h2>
      <div className={styles.divider}></div>
      <a href="/Propps" className={styles.card}>
        <h3>propps</h3>
      </a>
      <div className={styles.divider} />
      <p>
        building responsive UI features in react app with typescript. Taking
        responsibility for the design system and some of the feature designs.
      </p>

      <div className={styles.divider} />
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Eatfirst Australia</h3>
      </a>
      <div className={styles.divider} />
      <p>
        Building test-driven UI library in a react app with typescript for a
        greenfield project.
      </p>
    </div>
  );
}
