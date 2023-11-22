import Image from "next/image";
import React, { FC, ReactNode } from "react";

import styles from "./CreonLayout.module.css";

const CreonLayout: FC<{
  children: ReactNode;
  title: string;
  tagline: string;
}> = ({ children, title, tagline }) => {
  return (
    <div className={styles.creon__layout}>
      <div className={styles.layout__head}>
        <div className={styles.inner__layout}>
          <h3> {title} </h3>
          <h5> {tagline} </h5>
        </div>
        {children}
      </div>

      <div className={styles.images}>
        <Image
          src="/creon.svg"
          alt=""
          width={808}
          height={808}
          className={styles.image__two}
        />
        <Image src="/dark.svg" alt="" width={808} height={808} />
      </div>
    </div>
  );
};

export default CreonLayout;
