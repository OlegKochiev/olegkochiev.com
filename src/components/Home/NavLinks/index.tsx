import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../../constants';

const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

const Span = styled.span`
  display: block;
  padding: 0 5px;
  transition: background-color 0.15s, transform 0.15s;
  &:hover {
    color: #fff;
    background-color: #078080;
    transform: skewY(3deg);
  }
`;

const NavLinks = () => {
  return (
    <Nav>
      <Link href={PATHS.HOME()}>
        <Span>Главная</Span>
      </Link>
      <Link href={PATHS.ABOUT_ME()}>
        <Span>Обо мне</Span>
      </Link>
      <Link href={PATHS.PORTFOLIO()}>
        <Span>Портфолио</Span>
      </Link>
    </Nav>
  );
};

export default NavLinks;
