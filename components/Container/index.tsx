import type { FC } from "react";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerPropps = {
  children: ReactNode;
};

export const Container: FC<ContainerPropps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
