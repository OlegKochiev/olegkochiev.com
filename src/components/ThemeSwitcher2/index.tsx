import React from 'react';
import styled from 'styled-components';

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  user-select: none;
  transition-property: transform, opacity;
  width: 14px;
  height: 14px;
  display: block;
  background-color: #000;
  mask-size: 14px;
  mask-repeat: no-repeat;
  mask-position: center;
  border-radius: 100%;
`;

const Sun = styled(Icon)`
  mask-image: url('/icons/sun.svg');
  transform: translate(-50%, -50%);
  opacity: 1;
`;

const Moon = styled(Icon)`
  mask-image: url('/icons/moon.svg');
  transform: translate(-50%, -200%);
  opacity: 0;
`;

const Control = styled.div`
  display: flex;
  position: absolute;
  overflow: hidden;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transition-property: background-color, transform;
`;

const Track = styled.div`
  display: flex;
  position: absolute;
  width: 36px;
  height: 18px;
  border-radius: 100px;
  background-color: #dadada;
  transition: background-color;
`;

const Label = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0;
  width: 36px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + .${Label} {
    & .${Track} {
      background-color: #6f6f6f;
    }
    & .${Control} {
      transform: translateX(16px);
      background-color: #6f6f6f;
    }
    & .${Sun} {
      transform: translate(-50%, 200%);
      opacity: 0;
    }
    & .${Moon} {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;

const ThemeSwitcher2 = () => {
  const inputClickHandler = (e) => {
    console.log(e.target.checked);
  };
  return (
    <div>
      <Input onClick={inputClickHandler} id="theme-switch" type="checkbox" />
      <Label htmlFor="theme-switch">
        <Track />
        <Control>
          <Sun />
          <Moon />
        </Control>
      </Label>
    </div>
  );
};

export default ThemeSwitcher2;
