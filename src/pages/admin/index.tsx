import React from 'react';
import styled from 'styled-components';
import Tabs from '../../components/Admin/Tabs';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

const Main = styled.div`
  height: 100%;
`;
const Admin: React.FC<{}> = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <Tabs />
      </Main>
    </PageContainer>
  );
};

export default Admin;
