import { Card } from "../Card";
import { EatfirstLogo } from "../Icons/EatfirstLogo";
import { ProppsLogo } from "../Icons/ProppsLogo";
import styles from "./Work.module.scss";

export function Work() {
  return (
    <div className={styles.section}>
      <h2>Work</h2>
      <Card>
        <Card.Header
          title={{ type: "link", text: "Propps" }}
          detail="Remote, Australia | Sept 21 - Jul 22"
          logo={<ProppsLogo />}
          divider
        />
        <Card.Body>
          <p className={styles.paragraph}>
            building responsive UI features in react app with typescript. Taking
            responsibility for the design system and some of the feature
            designs.
          </p>
        </Card.Body>
        <Card.Footer>
          <p>NextJS, React, TypeScript, GraphQL, jest + emotion</p>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header
          title={{ type: "link", text: "Eatfirst" }}
          detail="Sydney, Australia | Mar 21 - Aug 21"
          logo={<EatfirstLogo />}
          divider
        />
        <Card.Body>
          <p>
            Building test-driven UI library in a react app with typescript for a
            greenfield project.
          </p>
        </Card.Body>
        <Card.Footer>
          <p>NextJS, React, TypeScript, jest + Tailwind</p>
        </Card.Footer>
      </Card>
    </div>
  );
}
