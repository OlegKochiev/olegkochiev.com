import {Fragment, useContext} from 'react';
import styled from 'styled-components';
import {homePageDatas} from '../../../data/home';
import {GlobalContext} from '../../../context/GlobalContext';

const Image = styled.img`
  width: ${({width}) => width};
  height: ${({width}) => width};
  border-radius: 100%;
  border: 2px solid ${({theme}) => theme.lineColor};
  transition: border-color 0.25s;
`;

const MyImage = ({width}: {width: string}) => {
  const {theme} = useContext(GlobalContext);
  return (
    <Fragment>
      <Image width={width} alt="avatar" theme={theme} src={homePageDatas.imgSrc} />
    </Fragment>
  );
};

export default MyImage;
