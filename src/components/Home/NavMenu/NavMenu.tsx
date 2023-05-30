import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {PAGES} from '../../../constants';
import {Nav, Span} from './StyledNavMenu';

type Props = {
  isHorizontal?: boolean;
};

const pages = Object.values(PAGES);

const NavLink = ({title, path}: {title: string; path: string}) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} hidden={isActive && path === PAGES.HOME.PATH()}>
      <Span isActive={isActive}>{title}</Span>
    </Link>
  );
};

const NavLinks = ({isHorizontal = true}: Props) => {
  return (
    <Nav isHorizontal={isHorizontal}>
      {pages.map((page) => (
        <NavLink key={page.TITLE} path={page.PATH()} title={page.TITLE} />
      ))}
    </Nav>
  );
};

export default NavLinks;
