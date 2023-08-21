'use client';

import styles from './TeaserSpaceAnimation.module.scss';

export default function TeaserSpaceAnimation() {
  
  const meteorCount = 6;
  const meteorArray = Array.from(Array(meteorCount).keys());

  const Meteor = () => {
    return (
      <span 
        className={styles.meteor}
        style={{
          top: '-100px',
          left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
        }}
      />
    );
  };

  const TeaserElement = ({ color }) => {
    return (
      <div data-space-teaser className={`${styles['teaser-element']} ${styles[`color-${color}`]}`}>
        {meteorArray.map((meteor) => <Meteor key={meteor} />)}
        <h3>Ipsum adipisicing Ipsum</h3>
        <p>
          Do veniam fugiat dolore adipisicing et do non.
          Sit veniam elit sint excepteur exercitation consectetur ipsum eiusmod in voluptate sunt ipsum sint.
          Consequat esse duis incididunt est anim aliqua do nostrud laboris.
        </p>
      </div>
    );
  };

  return (
    <div className="teaser-element-container">
      <div className="grid-row">
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement color="0" />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement color="1" />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement color="2" />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement color="3" />
        </div>
      </div>
    </div>
  );
};