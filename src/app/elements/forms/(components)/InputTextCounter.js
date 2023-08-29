'use client';

import { useState } from 'react';
import styles from './InputTextCounter.module.scss';

export default function Teaser() {
  const inputPlaceholder = 'Enter your text here...';
  const maxCharacters = 20;

  const [inputValue, setInputValue] = useState(maxCharacters);

  const countChararacters = (e) => {
    const input = e.target;
    const inputValue = e.target.value;
    const count = inputValue.length;

    if (count >= maxCharacters) {
      input.classList.add(styles.error);
    } else {
      input.classList.remove(styles.error);
    }

    setInputValue(maxCharacters - count);
  };

  return (
    <div className={styles['input-container']}>
      <input maxLength={maxCharacters} type="text" className={styles.text} placeholder={inputPlaceholder} onKeyUp={countChararacters}></input>
      <span className={styles.counter}>{inputValue}</span>
    </div>
  );
};