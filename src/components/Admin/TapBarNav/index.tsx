import React from 'react';
import styled from 'styled-components';

const tapBarNavs = [
  {
    label: 'portfolio',
  },
  {
    label: 'education',
  },
  {
    label: 'aboutMe',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.button`
  padding: 20px;
`;

const TapBarNav = () => {
  return (
    <Container>
      {tapBarNavs.map((tabBarNav) => (
        <NavItem key={tabBarNav.label}>{tabBarNav.label}</NavItem>
      ))}
    </Container>
  );
};

export default TapBarNav;
