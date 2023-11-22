import React, { FC } from "react";

import styles from "./Pad.module.css";
import Image from "next/image";

const Pad: FC<PadI> = ({ title, desc, image, content }) => {
  return (
    <section className={styles.pad__module}>
      <div className={styles.coming__soon}>COMING SOON</div>
      <div className={styles.pad__head}>
        <h3> {title} </h3>
        <h5> {desc} </h5>
      </div>
      <Image src={image} alt="" width={423} height={234} />
      <div className={styles.pad__content}>{content}</div>
    </section>
  );
};

export default Pad;
