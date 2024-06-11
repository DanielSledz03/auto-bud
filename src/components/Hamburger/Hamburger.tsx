'use client';

import React, { useState } from 'react';
import './Hamburger.css';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div
      id="nav-icon2"
      className={open ? 'open' : ''}
      role="button"
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
      tabIndex={0}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default Hamburger;
