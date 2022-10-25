import { Card } from "../Card";
import { ProppsLogo } from "../Icons/ProppsLogo";
import styles from "./Education.module.scss";

export function Education() {
  return (
    <div className={styles.section}>
      <h2>Education</h2>
      <Card>
        <Card.Header
          title={{ type: "text", text: "General Assembly" }}
          detail="Software Engineering Immersive | Dec 20 - Mar 21"
          logo={<ProppsLogo />}
        />
        <Card.Body>
          <p>
            {" "}
            Main Project:{" "}
            <a href="https://justclipit.netlify.app/landing">PaperClip</a> a
            realtime chat application that allows you to jump in and chat with
            anyone who is online. It also lets you save (clip) your favourite
            conversations and dialogues
          </p>
        </Card.Body>
        <Card.Footer>
          <p>Tech Stack: React, Javascript</p>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header
          title={{ type: "text", text: "Masters of Architecture" }}
          detail="University of Newcastle | 2013-2015"
        />
      </Card>
      <Card>
        <Card.Header
          title={{ type: "text", text: "Bachelor of Architecture" }}
          detail="University of New South Wales | 2010-2012"
        />
      </Card>
    </div>
  );
}
