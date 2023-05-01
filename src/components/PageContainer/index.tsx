import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Container = styled.div`
  min-height: 100vh;
  padding: 0 15px 20px;
  @media (max-width: 770px) {
    font-size: 14px;
    position: relative;
  }
`;

const PageContainer = ({children}: Props) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
