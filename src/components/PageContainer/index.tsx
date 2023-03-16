import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Container = styled.div`
  min-height: 100vh;
  padding: 20px 15px;
`;

const PageContainer = ({children}: Props) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
