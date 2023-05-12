import {ReactElement, createContext} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import {THEME} from '../../constants';
import {Theme} from '../../types';

type Props = {
  children: ReactElement | ReactElement[];
};

export const GlobalContext = createContext({
  theme: THEME.LIGHT,
  themeSwitchHandler: (theme: Theme) => {},
});

const GlobalContextProvider = ({children}: Props) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', THEME.LIGHT);

  const themeSwitchHandler = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: theme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
