import React from 'react';
import styled from 'styled-components';
import Aside from '../../components/Admin/Aside';
import TapBarNav from '../../components/Admin/TapBarNav';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

const Main = styled.div`
  display: grid;
`;
const Admin: React.FC<{}> = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <TapBarNav />
      </Main>
    </PageContainer>
  );
};

export default Admin;
