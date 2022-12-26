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
  padding: 5px 5px;
  transition: background-color 0.15s, transform 0.15s;
  border-bottom: ${({isActive}) => (isActive ? '3px solid #078080' : 'none')};
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
    path: PATHS.EDUCATION(),
    title: 'Образование',
  },
  {
    path: PATHS.PORTFOLIO(),
    title: 'Портфолио',
  },
  {
    path: PATHS.ABOUT_ME(),
    title: 'Обо мне',
  },
];

const NavLink = ({title, path}) => {
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
        <NavLink path={link.path} title={link.title} />
      ))}
    </Nav>
  );
};

export default NavLinks;
