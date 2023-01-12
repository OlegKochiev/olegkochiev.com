import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../../constants';

const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

const Span = styled.span<{isActive: boolean}>`
  display: block;
  padding: 5px 5px;
  transition: background-color 0.15s, transform 0.15s, color 0.15s;
  border-bottom: 3px solid transparent;
  border-color: ${({isActive}) => (isActive ? '#078080' : 'transparent')};
  &:hover {
    color: #fff;
    background-color: #078080;
    transform: skewY(3deg);
  }
`;

const navLinksData = [
  {
    path: PATHS.HOME(),
    title: 'Главная',
  },
  {
    path: PATHS.PORTFOLIO.ALL(),
    title: 'Портфолио',
  },
  {
    path: PATHS.EDUCATION(),
    title: 'Образование',
  },
  {
    path: PATHS.ABOUT_ME(),
    title: 'Обо мне',
  },
];

const NavLink = ({title, path}: {title: string; path: string}) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} hidden={router.pathname === path && path === PATHS.HOME()}>
      <Span isActive={isActive}>{title}</Span>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <Nav>
      {navLinksData.map((link) => (
        <NavLink key={link.title} path={link.path} title={link.title} />
      ))}
    </Nav>
  );
};

export default NavLinks;
