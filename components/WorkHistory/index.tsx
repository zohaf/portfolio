import { Card } from "../Card";
import { EatfirstLogo } from "../Icons/EatfirstLogo";
import { ProppsLogo } from "../Icons/ProppsLogo";
import { BaskingLogo } from "../Icons/BaskingLogo";
import styles from "./Work.module.scss";

export function Work() {
  return (
    <div className={styles.section}>
      <h2>Work</h2>
      <Card>
        <Card.Header
          title={{ type: "link", text: "Basking" }}
          detail="Remote, European timezone | Jan 23 - Aug 23"
          logo={<BaskingLogo />}
          divider
        />
        <Card.Body>
          <p>
            Charged with taking ownership of the frontend, I initiated and
            executed an infrastructure upgrade to add Vite, TypeScript, and
            Tailwind. Alongside this, I undertook the redesign of the UI whilst
            releasing new features.
          </p>
        </Card.Body>
        <Card.Footer>
          <p>React, TypeScript, GraphQL, Tailwind</p>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header
          title={{ type: "link", text: "Propps" }}
          detail="Remote, Australia | Sept 21 - Dec 22"
          logo={<ProppsLogo />}
          divider
        />
        <Card.Body>
          <p>
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
