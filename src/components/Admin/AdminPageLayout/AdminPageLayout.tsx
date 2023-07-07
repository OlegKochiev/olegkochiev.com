import React, {ReactNode, useState} from 'react';
import {Container, Main, Wrapper} from './StyledAdminPageLayout';
import SideNav from '../SideNav/SideNav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
  children?: ReactNode;
}

export default function AdminPageLayout({children}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <SideNav isMenuOpen={isMenuOpen} />
      <Wrapper>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Container>
  );
}
