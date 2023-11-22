import React, { FC } from "react";

import styles from "./Profile.module.css";
import Image from "next/image";

interface ProfileI {
  image?: string;
}

const Profile: FC<ProfileI> = ({ image }) => {
  return (
    <section className={styles.profile__module}>
      <h3>Profiting Through</h3>
      <div className={styles.tagline}>AI Innovation & Decentralization</div>

      <div className={styles.divider}>
        <Image
          src={image ? image : "/profile.svg"}
          alt=""
          width={947}
          height={485}
        />
        <div>
          <h5>The dynamic community driven business model of the future.</h5>
          <p>
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
