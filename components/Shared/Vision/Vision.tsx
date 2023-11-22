"use client";

import React, { useEffect, useRef, useState } from "react";

import styles from "./Vision.module.css";
import Image from "next/image";
import Accordion from "./Accordion";

const accData: AccordionData[] = [
  {
    icon: "/acc1.svg",
    title: `Profitability and Growth`,
    content: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    icon: "/acc2.svg",
    title: `Transparent & Fair Decentralized Earnings`,
    content: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment oportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    icon: "/acc3.svg",
    title: `Launching the future`,
    content: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitbility of these projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    icon: "/acc4.svg",
    title: `Limitless Possibilities of AI & Crypto`,
    content: `At Creon, we handpic cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
];

const Vision = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const onClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <section className={styles.vision__module}>
      <div className={styles.left}>
        <h3>
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span>while prioritizing communities and democratizing profits</span>
        </h3>

        {/* <Image src="/vision.svg" alt="" width={836} height={502} /> */}
        <div>
          <Image src="/vision.svg" alt="" width={836} height={502} />
        </div>
      </div>

      <div className={styles.right}>
        {accData.map((data, idx) => (
          <Accordion
            key={idx}
            data={data}
            handleOnClick={() => onClick(idx)}
            isOpen={idx === currentIdx}
            currentIdx={currentIdx}
          />
        ))}
      </div>
    </section>
  );
};

export default Vision;
