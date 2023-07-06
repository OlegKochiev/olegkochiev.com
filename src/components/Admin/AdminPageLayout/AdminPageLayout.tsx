import React, {ReactNode} from 'react';
import {Container, Main, Wrapper} from './StyledAdminPageLayout';
import SideNav from '../SideNav/SideNav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
  children?: ReactNode;
}

export default function AdminPageLayout({children}: Props) {
  return (
    <Container>
      <SideNav />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Container>
  );
}
