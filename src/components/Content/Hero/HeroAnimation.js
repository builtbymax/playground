import { Media } from '@/components/UI/Media';
import BasketBallPink from '../../../../public/stage-basketball-1.png';
import BasketBallBlue from '../../../../public/stage-basketball-2.png';
import BasketBallOrange from '../../../../public/stage-basketball-3.png';
import Styles from './HeroAnimation.module.scss';
import clsx from 'clsx';

const HeroAnimation = () => {
  return (
    <div className={Styles['hero-animation-wrapper']}>
      {images.map((asset, index) => (
        <div key={index} data-range-min={asset.range[0]} data-range-max={asset.range[1]} className={clsx(Styles['hero-animation-block'], Styles[`element-${index}`], 'hero-movement-js')}>
          <Media asset={asset.image} quality={asset.quality} priority={asset.priority} />
        </div>
      ))}
    </div>
  )
};
HeroAnimation.displayName = 'HeroAnimation';

export { HeroAnimation };

//  Content
//  ------------------------------------------------------------

const images = [
  {
    image: {
      url: BasketBallOrange,
      alt: 'Playground 3d Illustration',
      type: 'image',
    },
    quality: 100,
    priority: false,
    range: [-100, 150],
  },
  {
    image: {
      url: BasketBallPink,
      alt: 'Playground 3d Illustration',
      type: 'image',
    },
    quality: 100,
    priority: true,
    range: [-165, 85],
  },
  {
    image: {
      url: BasketBallBlue,
      alt: 'Playground 3d Illustration',
      type: 'image',
    },
    quality: 100,
    priority: false,
    range: [-80, 140],
  },
];

//  MouseMovement Animation (maybe for later)
//  ------------------------------------------------------------

// 'use client';
// import { useEffect } from 'react';

// useEffect(() => {
//   document.addEventListener('mousemove', elemMouseMovement);
// }, []);

// const elemMouseMovement = (e) => {
//   const target = e.currentTarget;
//   const movementElementArray = target.querySelectorAll('.hero-movement-js');
//   movementElementArray.forEach((el) => {
//     const elemContainer = el;
  
//     const easedX = e.pageX / window.innerWidth;
//     const easedY = e.pageY / window.innerHeight;

//     const elemRangeMin = parseInt(elemContainer.getAttribute('data-range-min'), 10);
//     const elemRangeMax = parseInt(elemContainer.getAttribute('data-range-max'), 10);

//     const range = [elemRangeMin, elemRangeMax];
//     const min = parseFloat(range[0]);
//     const max = parseFloat(range[1]);

//     const easeX = min + (easedX * (max - min));
//     const easeY = min + (easedY * (max - min));

//     elemContainer.style.transform = `translate(${easeX}px, ${easeY}px)`;
//   });
// };