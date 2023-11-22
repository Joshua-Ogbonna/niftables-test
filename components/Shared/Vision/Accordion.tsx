"use client"

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./Vision.module.css";

interface AccordionI {
  key: number;
  data: AccordionData;
  isOpen: boolean;
  handleOnClick: (idx: number) => void;
  currentIdx: number
}

const Accordion: FC<AccordionI> = ({ key, data, isOpen, handleOnClick, currentIdx }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={styles.acc} onClick={() => handleOnClick(key)}>
      {/* Head */}
      <div className={styles.acc__head}>
        <div>
          <Image src={data.icon} alt="" width={100} height={114} />
          <h5> {data.title} </h5>
        </div>
        {currentIdx !== key ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M2 11L8 5L14 11" stroke="white" stroke-width="1.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M2 5L8 11L14 5" stroke="white" stroke-width="1.5" />
          </svg>
        )}
      </div>

      {/* Body */}
      <div className={styles.acc__body} style={{ height }}>
        <div ref={contentRef}>{data.content}</div>
      </div>
    </div>
  );
};

export default Accordion;
