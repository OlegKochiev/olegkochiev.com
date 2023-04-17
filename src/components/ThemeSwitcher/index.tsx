import React, {useContext, useEffect, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {THEME} from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import {GlobalContext} from '../../context/ThemeContext';

const transitionTime = '0.3s';
const transitionTimingFunction = 'easy-in-out';

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  user-select: none;
  width: 14px;
  height: 14px;
  display: block;
  background-color: #a8a8a8;
  mask-size: 14px;
  mask-repeat: no-repeat;
  mask-position: center;
  border-radius: 100%;
  transition-property: transform, opacity;
  transition-duration: ${transitionTime};
  transition-timing-function: ${transitionTimingFunction};
`;

const Sun = styled(Icon)`
  mask-image: url('/icons/sun.svg');
  transform: translate(-50%, -50%);
`;

const Moon = styled(Icon)`
  mask-image: url('/icons/moon2.svg');
  transform: translate(-50%, 200%);
`;

const Control = styled.div`
  display: flex;
  position: absolute;
  overflow: hidden;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transition-property: transform, background-color;
  transition-duration: ${transitionTime};
  transition-timing-function: ${transitionTimingFunction};
`;

const Track = styled.div`
  display: flex;
  position: absolute;
  width: 36px;
  height: 18px;
  border-radius: 100px;
  background-color: #dadada;
`;

const Label = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  width: 38px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    & ${Control} {
      transform: translateX(15px);
      background-color: #6f6f6f;
    }
    & ${Sun} {
      transform: translate(-50%, -200%);
    }
    & ${Moon} {
      transform: translate(-50%, -50%);
    }
    & ${Track} {
      background-color: #bbb;
    }
  }
`;

const Container = styled.div`
  display: flex;
  height: 22px;
`;

const ThemeSwitcher = () => {
  const {theme, themeSwitchHandler} = useContext(GlobalContext);
  const [isChecked, setChecked] = useState<boolean>(theme.mode === 'light' ? false : true);

  useEffect(() => {
    setChecked(theme.mode === 'light' ? false : true);
  }, [theme]);

  const themeSwitch = () => {
    const currentTheme = theme.mode === 'light' ? THEME.DARK : THEME.LIGHT;
    setChecked(!isChecked);
    themeSwitchHandler(currentTheme);
  };

  return (
    <Container>
      <Input onChange={themeSwitch} id="theme-switch" type="checkbox" checked={isChecked} />
      <Label htmlFor="theme-switch">
        <Track />
        <Control>
          <Sun />
          <Moon />
        </Control>
      </Label>
    </Container>
  );
};

export default ThemeSwitcher;
