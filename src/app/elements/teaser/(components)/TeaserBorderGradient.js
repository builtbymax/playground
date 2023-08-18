'use client';

import { useEffect } from 'react';
import styles from './TeaserBorderGradient.module.scss';

export default function Teaser({ slug }) {

  useEffect(() => {
    const getMousePosition = () => {
      const boxNodeList = document.querySelectorAll('[data-gradient-teaser]');
      if (boxNodeList.length === 0) return;

      boxNodeList.forEach((box) => {
        document.addEventListener('mousemove', (e) => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          box.style.setProperty('--y__mouse__coordinate', `${y}px`);
          box.style.setProperty('--x__mouse__coordinate', `${x}px`);
        });
      });
    };
    getMousePosition();
  }, []);

  const TeaserElement = () => {
    return (
      <div data-gradient-teaser className={styles['teaser-element']}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.01208 12.991L5.00001 13" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 10H7" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.1813 16.5H7" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5378 11.3867H13.0801C12.544 11.3867 12.0865 10.9991 11.9983 10.4703L11.4199 7" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.1731 16.5H16.9038C17.5092 16.5 18 16.0092 18 15.4038V13.3003C18 13.0095 17.8845 12.7307 17.6789 12.5251L16.5385 11.3847L14.8511 8.00991C14.5416 7.39098 13.909 7.00001 13.217 7H7" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.6767 15.0091C15.5026 15.009 16.1722 15.6785 16.1722 16.5045C16.1723 17.3304 15.5027 18 14.6768 18C13.8509 18 13.1813 17.3305 13.1813 16.5046V16.5045C13.1813 15.6786 13.8508 15.0091 14.6767 15.0091V15.0091" stroke="var(--teaser__icon__color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
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
          <TeaserElement />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6">
          <TeaserElement />
        </div>
      </div>
    </div>
  );
};