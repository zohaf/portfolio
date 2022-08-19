import Link from "next/link";
import type { FC, ReactNode } from "react";
import { Children } from "react";
import styles from "./Card.module.scss";

type CardProps = { children: ReactNode };

type SubComponent = {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

export const Card: FC<CardProps> & SubComponent = ({ children }) => {
  const header = Children.map(children, (child) => {
    return child?.type.displayName === "Header" ? child : null;
  });
  const body = Children.map(children, (child) => {
    return child?.type.displayName === "Body" ? child : null;
  });
  const footer = Children.map(children, (child) => {
    return child?.type.displayName === "Footer" ? child : null;
  });

  return (
    <>
      {header}
      {body}
      {footer}
    </>
  );
};

type HeaderProps = {
  title: { type: "link" | "text"; text: String };
  detail: String;
};

const Header: FC<HeaderProps> = ({ title, detail }) => (
  <>
    <div className={styles.divider} />
    {title.type === "link" && (
      <Link href={`/${title.text.toLowerCase()}`}>
        <a className={styles.card}>
          <h3>{title.text}</h3>
          <h3>{detail}</h3>
        </a>
      </Link>
    )}
    {title.type === "text" && (
      <div className={styles.card}>
        <h3>{title.text}</h3>
        <h3>{detail}</h3>
      </div>
    )}
    <div className={styles.divider} />
  </>
);

const Body: FC<{
  children: ReactNode;
}> = ({ children }) => <>{children}</>;

const Footer: FC<{
  children: ReactNode;
}> = ({ children }) => <>{children}</>;

Header.displayName = "Header";
Body.displayName = "Body";
Footer.displayName = "Footer";
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
