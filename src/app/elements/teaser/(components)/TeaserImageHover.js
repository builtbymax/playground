'use client';

import styles from './TeaserImageHover.module.scss';
import Image from 'next/image';

export default function TeaserImageHover() {

  const teaserImageMovement = (e) => {
    const element = e.currentTarget;

    const easedX = e.pageX / window.innerWidth;
    const easedY = e.pageY / window.innerHeight;

    const moveRangeMin = parseInt(element.getAttribute('data-range-min'), 10);
    const moveRangeMax = parseInt(element.getAttribute('data-range-max'), 10);

    const range = [moveRangeMin ? moveRangeMin : -50, moveRangeMax ? moveRangeMax : 50];
    const min = parseFloat(range[0]);
    const max = parseFloat(range[1]);

    const easeX = min + (easedX * (max - min));
    const easeY = min + (easedY * (max - min));

    element.querySelector('img').style.transform = `translate(${easeX}px, ${easeY}px)`;
  };

  const setActive = (e) => {
    const element = e.currentTarget;
    element.classList.add('hover');
  };

  const setInactive = (e) => {
    const element = e.currentTarget;
    element.classList.remove('hover');
  };

  const TeaserElement = ({ url, city, date }) => {
    return (
      <li data-image-teaser className={styles['teaser-element']} onMouseMove={teaserImageMovement} onMouseEnter={setActive} onMouseLeave={setInactive}>
        <a href="#" title="">
          <div className={styles.media}>
            <Image data-movement src={url} alt="" width={668} height={620} />
          </div>
          <h3 className="heading-style-h1">{city}</h3>
          <p>{date}</p>
        </a>
      </li>
    );
  };

  return (
    <div className="teaser-element-container image-movement-teaser">
      <ul className={styles['teaser-elements-list']}>
        <TeaserElement url="https://picsum.photos/id/49/668/620" city="London" date="01.03.2022" />
        <TeaserElement url="https://picsum.photos/id/66/668/620" city="San Francisco" date="01.03.2022" />
        <TeaserElement url="https://picsum.photos/id/116/668/620" city="Munich" date="01.03.2022" />
      </ul>
    </div>
  );
};