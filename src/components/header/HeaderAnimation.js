'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';

export default function HeaderAnimation({ logo }) {

  useEffect(() => {
    const triangle = document.querySelector('.triangle-wrapper');
    if (!triangle) return;
    document.addEventListener('mousemove', triangleMouseMovement);
  }, []);

  const triangleMouseMovement = (e) => {
    const target = e.currentTarget;
    const movementElementArray = target.querySelectorAll('.movement-js');
    Array.prototype.forEach.call(movementElementArray, (el) => {
      const circlesContainer = el;
    
      const easedX = e.pageX / window.innerWidth;
      const easedY = e.pageY / window.innerHeight;
  
      const circleRangeMin = parseInt(circlesContainer.getAttribute('data-range-min'), 10);
      const circleRangeMax = parseInt(circlesContainer.getAttribute('data-range-max'), 10);
  
      const range = [circleRangeMin, circleRangeMax];
      const min = parseFloat(range[0]);
      const max = parseFloat(range[1]);
  
      const easeX = min + (easedX * (max - min));
      const easeY = min + (easedY * (max - min));
  
      circlesContainer.style.transform = `translate(${easeX}px, ${easeY}px)`;
    });
  };

  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <div className="triangle-wrapper">
          <div className="triangle-outer">
            <div className="triangle size-s movement-js" data-range-min="-50" data-range-max="50">
              <svg width="148" height="143" viewBox="0 0 148 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_242_705)">
                  <path d="M122.255 57.4004L44.9558 119.083L22.0148 23.6032L122.255 57.4004Z" stroke="url(#paint0_linear_242_705)" strokeWidth="10" />
                </g>
                <defs>
                  <filter id="filter0_f_242_705" x="0.0396729" y="0.97485" width="147.499" height="141.92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_242_705" />
                  </filter>
                  <linearGradient id="paint0_linear_242_705" x1="71.6699" y1="118.578" x2="22.701" y2="14.6049" gradientUnits="userSpaceOnUse">
                    <stop offset="0.109375" stopColor="var(--triangle-small-1__gradient-color-1)" stopOpacity="0.33" />
                    <stop offset="1" stopColor="var(--triangle-small-1__gradient-color-2)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="triangle size-s movement-js" data-range-min="-65" data-range-max="65">
              <svg className="element" width="138" height="153" viewBox="0 0 138 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_242_704)">
                  <path d="M41.0446 25.3768L113.478 92.7065L22.4391 129.512L41.0446 25.3768Z" stroke="url(#paint0_linear_242_704)" strokeWidth="10" />
                </g>
                <defs>
                  <filter id="filter0_f_242_704" x="0.925842" y="0.47374" width="136.714" height="152.065" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_242_704" />
                  </filter>
                  <linearGradient id="paint0_linear_242_704" x1="109.028" y1="66.3608" x2="13.4382" y2="130.164" gradientUnits="userSpaceOnUse">
                    <stop offset="0.109375" stopColor="var(--triangle-small-2__gradient-color-1)" stopOpacity="0.33" />
                    <stop offset="1" stopColor="var(--triangle-small-2__gradient-color-2)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="triangle size-s movement-js" data-range-min="-40" data-range-max="40">
              <svg width="180" height="155" viewBox="0 0 180 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_242_703)">
                  <path d="M24.5411 123.174L99.5432 25.1441L156.139 133.856L24.5411 123.174Z" stroke="url(#paint0_linear_242_703)" strokeWidth="10" />
                </g>
                <defs>
                  <filter id="filter0_f_242_703" x="0" y="0.863068" width="179.752" height="153.709" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_242_703" />
                  </filter>
                  <linearGradient id="paint0_linear_242_703" x1="68.1125" y1="35.5292" x2="156.145" y2="143.427" gradientUnits="userSpaceOnUse">
                    <stop offset="0.109375" stopColor="var(--triangle-small-3__gradient-color-1)" stopOpacity="0.53" />
                    <stop offset="1" stopColor="var(--triangle-small-3__gradient-color-2)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="triangle-inner">
            <div className="triangle size-l movement-js" data-range-min="-30" data-range-max="30">
              <svg className="element" width="595" height="507" viewBox="0 0 595 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_241_690)">
                  <path d="M61.7725 452.6L268.015 63.2162L531.404 412.586L61.7725 452.6Z" stroke="url(#paint0_linear_241_690)" strokeWidth="25" />
                </g>
                <defs>
                  <filter id="filter0_f_241_690" x="0" y="0" width="595" height="507" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_241_690" />
                  </filter>
                  <linearGradient id="paint0_linear_241_690" x1="297.5" y1="40" x2="297.5" y2="467" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--triangle-big__gradient-color-1)" stopOpacity="0.9" />
                    <stop offset="1" stopColor="var(--triangle-big__gradient-color-2)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="headline-container">
          {logo && (
            <div className="logo movement-js" data-range-min="-25" data-range-max="25">
              <Link href="/">
                <Image
                  src="/playground-logo-white.svg"
                  alt="Playground Logo"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
