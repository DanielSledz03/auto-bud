'use client';

import React from 'react';

import './Hamburger.css';
import { useMenu } from '@/providers/menuProvider';

const Hamburger = () => {
  const { toggleMenu, isMenuOpen } = useMenu();

  return (
    <div
      id="nav-icon2"
      className={isMenuOpen ? 'open' : ''}
      role="button"
      onClick={toggleMenu}
      onKeyDown={toggleMenu}
      tabIndex={0}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default Hamburger;
