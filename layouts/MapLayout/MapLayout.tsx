import React, { FC, ReactNode } from "react";

import styles from "./MapLayout.module.css";

const MapLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.map__layout}>{children}</div>;
};

export default MapLayout;
