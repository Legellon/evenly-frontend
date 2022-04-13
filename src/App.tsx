import { useEffect, useState } from 'react';
import MainContent from './components/main-content';
import GlobalProvider, { GlobalContext } from './context/global';
import { ColorThemes } from './types/global';

const bodyClassList = document.body.classList;

export default function App () {
  const [theme, setTheme] = useState<ColorThemes>(ColorThemes.DARK);

  const contextValue: GlobalContext = {
    theme,
    toggleTheme: () => {
      theme === ColorThemes.DARK ?
        setTheme(ColorThemes.LIGHT) : setTheme(ColorThemes.DARK);
    }
  };

  useEffect(() => {
    theme === ColorThemes.LIGHT ?
      bodyClassList.add('light-theme') : bodyClassList.remove('light-theme');
  }, [theme]);

  return (
    <GlobalProvider value={contextValue}>
      <MainContent />
    </GlobalProvider>
  );
}