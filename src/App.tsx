import { useEffect, useState } from 'react';
import Content from './components/content';
import GlobalProvider, { GlobalContext } from './context/global';
import { ColorThemes } from './context/global';

const bodyClassList = document.body.classList;

export default function () {
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
      <Content />
    </GlobalProvider>
  );
}