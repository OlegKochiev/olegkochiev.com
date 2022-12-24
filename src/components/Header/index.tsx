import React from 'react';
import {homePageDatas} from '../../data/home';
import {MyName} from '../../pages';
import NavLinks from '../Home/NavLinks';

const Header = () => {
  return (
    <div>
      <MyName>{homePageDatas.myName}</MyName>
      <NavLinks />
    </div>
  );
};

export default Header;
