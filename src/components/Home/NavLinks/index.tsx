import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../../constants';

const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

const NavLinks = () => {
  return (
    <Nav>
      <Link href={PATHS.HOME()}>Главная</Link>
      <Link href={PATHS.ABOUT_ME()}>Обо мне</Link>
      <Link href={PATHS.PORTFOLIO()}>Портфолио</Link>
    </Nav>
  );
};

export default NavLinks;
