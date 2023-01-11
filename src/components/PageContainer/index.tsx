import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  padding: 20px 15px;
`;

const PageContainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
