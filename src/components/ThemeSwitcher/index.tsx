import {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {THEME} from '../../constants';
import {Theme} from '../../types';

import styles from './style.module.scss';

const ThemedSwitcher = styled.div`
  align-self: ${({alignSelf}) => alignSelf};
`;

const ThemeSwitcher = ({alignSelf = 'center'}: {alignSelf: string}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const selectedTheme = isChecked ? THEME.LIGHT : THEME.DARK;
    setTheme(selectedTheme);
  };

  return (
    <ThemedSwitcher alignSelf={alignSelf}>
      <label className={styles.switch} htmlFor="theme-switcher">
        <input onChange={handleToggleTheme} type="checkbox" role="switch" id="theme-switcher"></input>
        <span className={styles.slider}></span>
      </label>
    </ThemedSwitcher>
  );
};

export default ThemeSwitcher;
