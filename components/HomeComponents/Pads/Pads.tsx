import React from "react";

import styles from "./Pads.module.css";
import Pad from "@/components/Shared/Pad/Pad";

const pads_data: PadI[] = [
  {
    title: "token",
    desc: "The Gateway token to the world of AI",
    image: "/token.svg",
    content: `Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.`,
  },
  {
    title: "revenue",
    desc: "Driving income and growth through decentralization",
    image: "/rev.svg",
    content: `CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`,
  },
  {
    title: "launchpad",
    desc: "Driving the future of AI Innovation",
    image: "/launch.svg",
    content: `The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
  },
];

const Pads = () => {
  return (
    <div className={styles.pads__module}>
      {pads_data.map((pad, idx) => (
        <Pad
          title={pad.title}
          desc={pad.desc}
          image={pad.image}
          content={pad.content}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Pads;
