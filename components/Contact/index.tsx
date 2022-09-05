import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import styles from "./Contact.module.scss";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";

const socials = [
  { socialIcon: "mail", socialUrl: "zohafard@gmail.com" },
  { socialIcon: "linkedin", socialUrl: "https://www.linkedin.com/in/zohaf/" },
  { socialIcon: "github", socialUrl: "https://github.com/zohaf" },
];

export function Contact() {
  const [hasCopied, setHasCopied] = useState(false);
  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    }
  }, [hasCopied]);

  return (
    <>
      <div className={styles.information}>
        <div className={styles.location}>
          <FeatherIcon icon="map-pin" size="14" />
          <p>Currently in Paris, France</p>
        </div>
        <div className={styles.social}>
          {socials.map((social, index) => {
            if (social.socialIcon === "mail") {
              return (
                <div key={index}>
                  {hasCopied && (
                    <div className={styles.notifiction}>email copied!</div>
                  )}

                  <CopyToClipboard
                    text={social.socialUrl}
                    onCopy={() => setHasCopied(true)}
                  >
                    <FeatherIcon icon={social.socialIcon} size="16" />
                  </CopyToClipboard>
                </div>
              );
            }

            return (
              <Link href={social.socialUrl} key={index}>
                <a target="_blank">
                  <FeatherIcon icon={social.socialIcon} size="16" />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
