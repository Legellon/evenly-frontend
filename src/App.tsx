import { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Content from './components/Content/Content';

type AppContext = {
  theme: ColorThemes
  showSearch: boolean
  toggleTheme(): void
  openSearch(): void
  closeSearch(): void
}

export default function () {
  const [theme, setTheme] = useState(ColorThemes.DARK);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolledPage, setScrolledPage] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolledPage(true);
    } else {
      setScrolledPage(false);
    }
  };

  const contextValue: AppContext = {
    showSearch,
    theme,

    toggleTheme: () => {
      if (theme === ColorThemes.DARK) {
        setTheme(ColorThemes.LIGHT);
      } else {
        setTheme(ColorThemes.DARK);
      }
    },

    openSearch: () => {
      setShowSearch(true);
    },

    closeSearch: () => {
      setShowSearch(false);
    },
  }

  useEffect(() => {
    if (theme === ColorThemes.LIGHT) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <AppContext.Provider value={contextValue}>
        <Content />
    </AppContext.Provider>
  );
}

export enum ColorThemes { LIGHT = 'light-theme', DARK = 'dark-theme' };

export const AppContext = createContext<AppContext | null>(null);
