'use client';
import { createContext, useState, ReactNode, useContext } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  isMenuLocationOpen: boolean;
  toggleMenu: () => void;
  openMenuLocation: () => void;
  closeMenuLocation: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  isMenuLocationOpen: false,
  toggleMenu: () => {},
  openMenuLocation: () => {},
  closeMenuLocation: () => {},
  closeMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuLocationOpen, setIsMenuLocationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const nextState = !prevState;

      if (!nextState) {
        setIsMenuLocationOpen(false);
      }

      return nextState;
    });
  };

  const openMenuLocation = () => {
    setIsMenuLocationOpen(true);
  };

  const closeMenuLocation = () => {
    setIsMenuLocationOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMenuLocationOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        isMenuLocationOpen,
        toggleMenu,
        openMenuLocation,
        closeMenuLocation,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
