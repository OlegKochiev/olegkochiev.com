import {ReactElement, createContext} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import {THEME} from '../../constants';
import {Theme} from '../../types';
import {SessionProvider} from 'next-auth/react';

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
      <SessionProvider>{children}</SessionProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
