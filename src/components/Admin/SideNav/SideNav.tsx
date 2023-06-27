import React from 'react';
import {Container, Li, Nav, NavFooter, NavHeader, Span, Ul} from './StyledSideNav';
import Link from 'next/link';
import MyImage from '../../Home/MyImage';
import DefaultButton from '../../DefaultComponents/Button';
import {useRouter} from 'next/router';

const links = [
  {
    title: 'Домой',
    href: '/admin',
  },
  {
    title: 'О жизни',
    href: '/admin/about-life',
  },
  {
    title: 'Финансы',
    href: '/admin/finance',
  },
  {
    title: 'Портфолио',
    href: '/admin/portfolio',
  },
  {
    title: 'Образование',
    href: '/admin/education',
  },
];

const userDate = {
  email: 'olegkochiev19@gmail.com',
};

export default function SideNav() {
  const {pathname} = useRouter();

  return (
    <Container>
      <NavHeader>
        <MyImage width="70" />
        {userDate.email}
      </NavHeader>
      <Nav>
        <Ul>
          {links.map(({title, href}) => (
            <Li key={title}>
              <Link href={href}>
                <Span isActive={pathname === href}>{title}</Span>
              </Link>
            </Li>
          ))}
        </Ul>
      </Nav>
      <NavFooter>
        <DefaultButton type="button">Выйти</DefaultButton>
      </NavFooter>
    </Container>
  );
}
