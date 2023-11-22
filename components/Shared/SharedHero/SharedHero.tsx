import React, { FC, ReactNode } from "react";

import styles from "./SharedHero.module.css";
import Navbar from "@/components/Navbar/Navbar";

const SharedHero: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div className={styles.shared__hero}>
      <Navbar />
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  );
};

export default SharedHero;
