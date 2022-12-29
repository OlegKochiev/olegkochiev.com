import {Fragment, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {homePageDatas} from '../../../data/home';
import {Theme} from '../../../types';

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid ${({theme}) => theme.theme.lineColor};
  transition: border-color 0.25s;
`;

const MyImage = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Fragment>
      <Image src={homePageDatas.imgSrc} />
    </Fragment>
  );
};

export default MyImage;
