"use client";

import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.navbar__module}>
      <Image
        src="/logo.svg"
        alt="brand logo"
        width={140}
        height={39}
        onClick={() => router.push("/")}
      />

      {/* Links */}

      <ul>
        <li>
          <Link href="/creon-pass">Creon Pass</Link>
        </li>
        <li>
          Token <span>Soon</span>
        </li>
        <li>
          AI Revenue <span>Soon</span>
        </li>
        <li>
          AI Launchpad <span>Soon</span>
        </li>
        <li>
          <button>Connect</button>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            onClick={() => setIsOpen(true)}
          >
            <rect width="38" height="38" rx="6" fill="white" />
            <rect x="9" y="12" width="20" height="2" fill="black" />
            <rect x="9" y="18" width="20" height="2" fill="black" />
            <rect x="9" y="24" width="20" height="2" fill="black" />
          </svg>
        </li>
      </ul>

      {/* Mobile Nav */}
      {isOpen ? (
        <div className={`${styles.mobile__nav} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobile__head}>
            <button>Connect</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              onClick={() => setIsOpen(false)}
            >
              <rect width="38" height="38" rx="6" fill="#3D8BFF" />
              <path
                d="M13 13L19 19M25 25L19 19M19 19L25 13L13 25"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>

          {/* Links */}
          <div className={styles.links}>
            {[
              {
                name: "Creon Pass",
                soon: false,
                link: "/creon-pass",
              },
              {
                name: "Token",
                soon: true,
                link: "/",
              },
              {
                name: "AI Income",
                soon: true,
                link: "/",
              },
              {
                name: "AI Launchpad",
                soon: true,
                link: "/",
              },
            ].map((link, idx) => (
              <Link href={link.link} key={idx} onClick={() => setIsOpen(false)}>
                {" "}
                {link.name} {link.soon ? <span>soon</span> : null}{" "}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className={styles.icons}>
            <Image src="/tg.svg" alt="" width={34} height={34} />
            <Image src="/discord.svg" alt="" width={34} height={34} />
            <Image src="/twitter.svg" alt="" width={34} height={34} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
