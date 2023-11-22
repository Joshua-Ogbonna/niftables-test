import React from "react";

import styles from "./Prospects.module.css";
import SharedProspects from "@/components/Shared/SharedProspects/SharedProspects";
import Image from "next/image";
import Footer from "@/components/Shared/Footer/Footer";

const Prospects = () => {
  return (
    <section className={styles.prospects__module}>
      <SharedProspects />

      <Footer />
    </section>
  );
};

export default Prospects;
