'use client';

import styles from './TeaserSpaceAnimation.module.scss';

export default function TeaserSpaceAnimation() {
  
  const fallingStarArray = Array.from(Array(6).keys());
  const sprinklingStarArray = Array.from(Array(8).keys());

  const FallingStar = () => {
    return (
      <span 
        className={styles['falling-star']}
        style={{
          top: Math.floor(Math.random() * (-50 - -200) + -200) + 'px',
          left: Math.floor(Math.random() * (600 - -600) + -600) + 'px',
          animationDelay: Math.random() * (0.7 - 0.2) + 0.2 + 's',
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
        }}
      />
    );
  };

  const SprinklingStar = () => {
    return (
      <span 
        className={styles['sprinkling-star']} 
        style={{
          top: Math.floor(Math.random() * (200 - -200)) + 'px',
          left: Math.floor(Math.random() * (300 - -300)) + 'px',
          animationDelay: Math.random() * (3 - 1) + 1 + 's',
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
        }}
      />
    );
  };

  const TeaserElement = ({ color }) => {
    return (
      <div data-space-teaser className={`${styles['teaser-element']} ${styles[`color-${color}`]}`}>
        {fallingStarArray.map((star) => <FallingStar key={star} />)}
        {sprinklingStarArray.map((star) => <SprinklingStar key={star} />)}
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