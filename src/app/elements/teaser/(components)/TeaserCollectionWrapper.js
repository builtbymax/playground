'use client';

import styles from './TeaserCollectionWrapper.module.scss';
import Image from 'next/image';

export default function TeaserCollectionWrapper() {

  const TeaserElement = ({ url, city, date }) => {
    return (
      <a href="#" className={styles['teaser-element']}>
        <div className={styles['teaser-box-wrapper']}>
          <div className={styles.box} style={{backgroundImage: "url('https://images.unsplash.com/photo-1692317785860-2ec5796434f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80')"}}></div>
          <div className={styles.box} style={{backgroundImage: "url('https://images.unsplash.com/photo-1691225557634-863116e2eb1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80')"}}></div>
          <div className={styles.box} style={{backgroundImage: "url('https://images.unsplash.com/photo-1691938670117-5c65ae4c19fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80')"}}>
            <div className={styles['content-wrapper']}>
              <div className={styles.text}>
                <p className={styles.sub}>10 Files</p>
                <h3>Dribbble Sho ...</h3>
              </div>
              <div className={styles['content-box-logo']}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5835 1.25H13.2502V3.91667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.25 5.25L13.25 1.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.91667 13.25H1.25V10.5833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.25 9.25L1.25 13.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.9165 6.58333V3.25C1.9165 2.51333 2.51317 1.91667 3.24984 1.91667H6.58317" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5833 7.91667V11.25C12.5833 11.9867 11.9867 12.5833 11.25 12.5833H7.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>              
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="teaser-element-container collection-wrapper-teaser">
      <div className="grid-row">
        <div className="grid-col gd-xs-12 gd-m-6 gd-l-4">
          <TeaserElement />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6 gd-l-4">
          <TeaserElement />
        </div>
        <div className="grid-col gd-xs-12 gd-m-6 gd-l-4">
          <TeaserElement />
        </div>
      </div>
    </div>
  );
};