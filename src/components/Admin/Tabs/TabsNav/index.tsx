import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import TabsNavItem from './TabsNavItem';

const tabs = [
  {
    title: 'Портфолио',
    name: 'portfolio',
  },
  {
    title: 'Образование',
    name: 'education',
  },
  {
    title: 'Обо мне',
    name: 'aboutMe',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c7c7c7;
`;

const TabsNav = ({activeTab, setActiveTab}: {activeTab: string; setActiveTab: void}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Container>
      {tabs.map((tab) => (
        <TabsNavItem key={tab.name} tabName={tab.name} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </Container>
  );
};

export default TabsNav;
