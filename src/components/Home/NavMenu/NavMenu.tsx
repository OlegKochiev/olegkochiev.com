import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/react';
import {PAGES} from '../../../constants';
import {Nav, Span} from './StyledNavMenu';

type Props = {
  isHorizontal?: boolean;
};

const pages = [PAGES.PORTFOLIO, PAGES.EDUCATION, PAGES.ABOUT_ME];

const NavLink = ({title, path}: {title: string; path: string}) => {
  const router = useRouter();
  const isActive = path === router.pathname;

  return (
    <Link href={path}>
      <Span isActive={isActive}>{title}</Span>
    </Link>
  );
};

const NavLinks = ({isHorizontal = true}: Props) => {
  const session = useSession();
  const router = useRouter();
  const isAuthorized = !!session.data;
  return (
    <Nav isHorizontal={isHorizontal}>
      {pages.map((page) => (
        <NavLink key={page.title} path={page.path()} title={page.title} />
      ))}
      {router.pathname !== PAGES.HOME.path() && isAuthorized && (
        <NavLink key={PAGES.ADMIN.title} path={PAGES.ADMIN.path()} title={PAGES.ADMIN.title} />
      )}
      {router.pathname !== PAGES.HOME.path() && !isAuthorized && (
        <NavLink key={PAGES.LOGIN.title} path={PAGES.LOGIN.path()} title={PAGES.LOGIN.title} />
      )}
    </Nav>
  );
};

export default NavLinks;
