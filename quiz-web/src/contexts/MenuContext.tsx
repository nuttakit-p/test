import { useState, createContext, useContext } from 'react';

interface Data {
  currentMenu: string;
}

interface MenuContextType extends Data {
  setDataMenu: (e: any) => void;
  setCurrentMenu: (path: string) => void;
}

interface Props {
  children: JSX.Element;
}

const MenuContext = createContext<MenuContextType | null>(null);

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
}

const MenuProvider = ({ children }: Props) => {
  const [currentMenu, setCurrentMenu] = useState<string>('/');

  const setDataMenu = (data: Data) => {
    data?.currentMenu && setCurrentMenu(data?.currentMenu);
  };

  const MenuContextValue: MenuContextType = {
    setDataMenu,
    setCurrentMenu,
    currentMenu,
  };

  return <MenuContext.Provider value={MenuContextValue}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
