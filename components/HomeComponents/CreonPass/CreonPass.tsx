import React from "react";
import Image from "next/image";
import CreonLayout from "@/layouts/CreonLayout/CreonLayout";

import styles from "./CreonPass.module.css";

const CreonPass = () => {
  return (
    <CreonLayout
      title="creon pass nft"
      tagline={`The Creon NFT pass unlocks access to AI projects, the Creon
    launchpad, and a ticket to generate passive income through
    AI-driven tools`}
    >
      <section className={styles.creon__pass}>
        <div className={styles.divider}>
          <ul>
            <li>
              Pre-launch investment opportunities for upcoming AI projects
            </li>
            <li>Free and early access to Creon built AI projects</li>
            <li>Higher allocation limits on the Creon AI Launchpad</li>
            <li>Revenue share distribution from Creon built AI projects</li>
          </ul>

          <button>Buy Creon Pass</button>
        </div>
      </section>
    </CreonLayout>
  );
};

export default CreonPass;
