import React from 'react';
import styled from 'styled-components';
import Aside from '../../components/Admin/Aside';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

const Main = styled.main``;
const Admin: React.FC<{}> = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <Aside />
      </Main>
    </PageContainer>
  );
};

export default Admin;
