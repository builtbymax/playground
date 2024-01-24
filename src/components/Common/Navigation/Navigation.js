'use client';

import { ContentSize } from '@/components/UI/Section';
import Link from 'next/link';
import Logo from '@/components/Common/Logo/Logo';
import { useState } from 'react';
import Hamburger from '@/components/Common/Navigation/Hamburger';
import Styles from './Navigation.module.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentSize>
      <nav className={Styles['navigation-container']}>
        <Logo typo={true} />
        <div className={Styles['navigation-items']}>
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </nav>
    </ContentSize>
  );
};