import React from "react";

import styles from "./CPads.module.css";
import MapLayout from "@/layouts/MapLayout/MapLayout";
import Pad from "@/components/Shared/Pad/Pad";
import Footer from "@/components/Shared/Footer/Footer";

const pads_data: PadI[] = [
  {
    title: "token",
    desc: `Empowering NFT Holders
    and Shaping AI Development`,
    image: "/ctoken.svg",
    content: `Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.`,
  },
  {
    title: "income",
    desc: `Harnessing AI for Profit
    Generation`,
    image: "/cincome.svg",
    content: `As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.`,
  },
  {
    title: "launchpad",
    desc: `Unlocking Tokenized
    AI Projects`,
    image: "/claunch.svg",
    content: `AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
  },
];

const CPads = () => {
  return (
    <MapLayout>
      <section className={styles.cpads__module}>
        {pads_data.map((pad, idx) => (
          <Pad
            title={pad.title}
            desc={pad.desc}
            image={pad.image}
            content={pad.content}
            key={idx}
          />
        ))}
      </section>

      <Footer />
    </MapLayout>
  );
};

export default CPads;
