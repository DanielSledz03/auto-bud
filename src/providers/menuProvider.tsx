'use client';
import { createContext, useState, ReactNode, useContext } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  isMenuLocationOpen: boolean;
  toggleMenu: () => void;
  toggleMenuLocation: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  isMenuLocationOpen: false,
  toggleMenu: () => {},
  toggleMenuLocation: () => {},
});

export const useMenu = () => useContext(MenuContext);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuLocationOpen, setIsMenuLocationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleMenuLocation = () => {
    setIsMenuLocationOpen(prevState => !prevState);
  };

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, toggleMenu, toggleMenuLocation, isMenuLocationOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
};
