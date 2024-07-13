'use client';
import { MenuProvider } from '@/providers/menuProvider';

import MobileMenu from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';

const Menus = () => {
  return (
    <MenuProvider>
      <Nav />
      <MobileMenu />
    </MenuProvider>
  );
};

export default Menus;
