import type { FC } from "react";
import { ReactNode } from "react";
import styles from "./container.module.scss";

type ContainerPropps = {
  children: ReactNode;
};

export const Container: FC<ContainerPropps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
