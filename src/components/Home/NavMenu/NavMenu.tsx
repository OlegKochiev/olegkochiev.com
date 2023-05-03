import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../../constants';
import {Nav, Span} from './StyledNavMenu';

type Props = {
  isHorizontal?: boolean;
};

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
    <Link href={path} hidden={isActive && path === PATHS.HOME()}>
      <Span isActive={isActive}>{title}</Span>
    </Link>
  );
};

const NavLinks = ({isHorizontal = true}: Props) => {
  return (
    <Nav isHorizontal={isHorizontal}>
      {navLinksData.map((link) => (
        <NavLink key={link.title} path={link.path} title={link.title} />
      ))}
    </Nav>
  );
};

export default NavLinks;
