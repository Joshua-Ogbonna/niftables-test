import CHero from "@/components/CreonComponents/CHero/CHero";
import CProspects from "@/components/CreonComponents/CProspects/CProspects";
import Profile from "@/components/HomeComponents/Profit/Profile";
import Vision from "@/components/Shared/Vision/Vision";
import CreonLayout from "@/layouts/CreonLayout/CreonLayout";
import React from "react";

import styles from "./creon-pass.module.css";
import CPads from "@/components/CreonComponents/CPads/CPads";
import Footer from "@/components/Shared/Footer/Footer";

const CreonPass = () => {
  return (
    <>
      <CHero />
      <Vision />
      <Profile image="/pro2.svg" />
      <CProspects />
      <CreonLayout
        title="creon pass nft"
        tagline={`The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools`}
      >
        <div className={styles.divider}>
          <div className={styles.contents}>
            <p>
              Prospect to derive financial benefits through the redistributed
              profit generated from AI tools, but only when the majority of NFT
              holders decide to release the tool publicly.
            </p>
            <div>
              <p>
                The possibility of allocating investments into new, exceptional
                tokenized AI tools through Creon Launchpad.
              </p>
              <p>
                Early access to allocations in inspiring tokenized projects,
                real businesses based on AI.
              </p>
            </div>
          </div>

          <button>Buy Creon Pass</button>
        </div>
      </CreonLayout>
      <CPads />
      {/* <Footer /> */}
    </>
  );
};

export default CreonPass;
