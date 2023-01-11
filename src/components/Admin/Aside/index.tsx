import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav``;
const Ul = styled.ul``;
const Li = styled.li``;

const links = [
  {
    title: 'Портфолио',
    href: '/admin/edit-portfolio',
  },
  {
    title: 'Образование',
    href: '/admin/edit-portfolio',
  },
  {
    title: 'Обо мне',
    href: '/admin/edit-portfolio',
  },
];

const Container = styled.div``;

const Aside: React.FC<{}> = () => {
  return (
    <Container>
      <aside>
        <Nav>
          <Ul>
            {links.map((link) => (
              <Li>
                <Link href={link.href}>{link.title}</Link>
              </Li>
            ))}
          </Ul>
        </Nav>
      </aside>
    </Container>
  );
};

export default Aside;
