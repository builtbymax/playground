'use client';

import styles from './ProgressiveBlurTeaser.module.scss';
import Image from 'next/image';

export default function Teaser() {
  const TeaserElement = () => {
    return (
      <div className={styles['progressive-blur-teaser-element']}>
        <div className={styles.media}>
          <Image src="/newyork_map_example.png" alt="New York Map" width="500" height="500" quality={100} />
        </div>
        <div className={styles.content}>
          <div className={styles.pointer}>
            <span></span>
            <span></span>
          </div>
          <h3>New York, USA</h3>
          <p>You can also work from anywhere in the world.</p>
        </div>
      </div>
    )
  };

  return (
    <div className="grid-row">
      <div className="grid-col gd-xs-12 gd-m-4">
        <TeaserElement />
      </div>
      <div className="grid-col gd-xs-12 gd-m-4">
        <TeaserElement />
      </div>
      <div className="grid-col gd-xs-12 gd-m-4">
        <TeaserElement />
      </div>
    </div>
  );
};