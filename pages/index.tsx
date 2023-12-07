import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src='/hero-gradient.png'
                width={1390}
                height={1390}
                alt='Background gradient from red to blue'
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src='/hero-asset.png'
              width={500}
              height={500}
              alt='Hero asset, NFT marketplace'
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <br />
                My choices make the world a better place.
              </h1>
              <p className={styles.heroSubtitle}>
                당신이 원하는 사람에게 투표해주세요.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href='/buy'>
                  Go To Vote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
