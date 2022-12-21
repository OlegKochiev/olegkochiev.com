import {useContext} from 'react';
import {THEME} from '../../constants';
import {Theme} from '../../types';
import styled, {ThemeContext} from 'styled-components';

import styles from './style.module.scss';

const ThemedSwitcher = styled.div`
  align-self: ${(props) => props.alignSelf};
`;

const ThemeSwitcher = ({alignSelf = 'center'}: {alignSelf: string}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e?.target?.checked;
    const selectedTheme = isChecked ? THEME.LIGHT : THEME.DARK;
    setTheme(selectedTheme);
  };

  return (
    <ThemedSwitcher alignSelf={alignSelf}>
      <label className={styles.switch} htmlFor="theme-switcher">
        <input
          checked={theme === THEME.LIGHT ? true : false}
          onChange={handleToggleTheme}
          type="checkbox"
          role="switch"
          id="theme-switcher"
        ></input>
        <span className={styles.slider}></span>
      </label>
    </ThemedSwitcher>
  );
};

export default ThemeSwitcher;
