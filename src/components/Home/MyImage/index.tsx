import {Fragment, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {homePageDatas} from '../../../data/home';
import {GlobalContext} from '../../../context/ThemeContext';

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid ${({theme}) => theme.lineColor};
  transition: border-color 0.25s;
`;

const MyImage = () => {
  const {theme} = useContext(GlobalContext);
  return (
    <Fragment>
      <Image alt="my image" theme={theme} src={homePageDatas.imgSrc} />
    </Fragment>
  );
};

export default MyImage;
