'use client';
import { MenuProvider } from '@/providers/menuProvider';

import MobileMenu from '../MobileMenu/MobileMenu';
import MobileMenuLocations from '../MobileMenu/MobileMenuLocations/MobileMenuLocations';
import Nav from '../Nav/Nav';

const Menus = () => {
  return (
    <MenuProvider>
      <Nav />
      <MobileMenu />
      <MobileMenuLocations />
    </MenuProvider>
  );
};

export default Menus;
