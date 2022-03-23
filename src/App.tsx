import { createContext, useEffect, useState } from 'react';
import Content from './components/content/content';

type AppContext = {
  theme: ColorThemes
  toggleTheme(): void
}

export enum ColorThemes { LIGHT = 'light-theme', DARK = 'dark-theme' };

export const AppContext = createContext<AppContext | null>(null);

export default function () {
  const [theme, setTheme] = useState(ColorThemes.DARK);

  const contextValue: AppContext = {
    theme,

    toggleTheme: () => {
      if (theme === ColorThemes.DARK) {
        setTheme(ColorThemes.LIGHT);
      } else {
        setTheme(ColorThemes.DARK);
      }
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