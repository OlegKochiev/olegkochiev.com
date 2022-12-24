import Link from 'next/link';
import {useRouter} from 'next/router';
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
  border-bottom: ${({isActive}) => (isActive ? '3px solid #078080' : 'none')};
  &:hover {
    color: #fff;
    background-color: #078080;
    transform: skewY(3deg);
  }
`;

const NavLinks = () => {
  const router = useRouter();

  return (
    <Nav>
      <Link href={PATHS.HOME()}>
        <Span isActive={router.pathname === PATHS.HOME()}>Главная</Span>
      </Link>
      <Link href={PATHS.ABOUT_ME()}>
        <Span isActive={router.pathname === PATHS.ABOUT_ME()}>Обо мне</Span>
      </Link>
      <Link href={PATHS.PORTFOLIO()}>
        <Span isActive={router.pathname === PATHS.PORTFOLIO()}>Портфолио</Span>
      </Link>
    </Nav>
  );
};

export default NavLinks;
