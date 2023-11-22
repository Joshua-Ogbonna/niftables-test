import React from "react";

import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p>© Creon 2023. All rights reserved.</p>

        <div className={styles.socials}>
          <Image src="/tg.svg" alt="" width={34} height={34} />
          <Image src="/discord.svg" alt="" width={34} height={34} />
          <Image src="/twitter.svg" alt="" width={34} height={34} />
        </div>
      </div>

      <div className={styles.powered}>
        Powered by <Image src="/nift.svg" alt="" width={101} height={18} />{" "}
      </div>
    </div>
  );
};

export default Footer;
