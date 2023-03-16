import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const TabButton = styled.button<{isActive: boolean}>`
  padding: 30px;
  border-left: 6px solid transparent;
  border-left-color: ${({theme, isActive}) => (isActive ? theme.theme.blueColor : 'transparent')};
  background-color: ${({theme, isActive}) => (isActive ? '#f8f8f8' : 'inherit')};
  font-size: 14px;
  color: ${({theme, isActive}) => (isActive ? theme.theme.blueColor : 'inherit')};
  text-transform: uppercase;
`;

const TabsNavItem = ({tabName, activeTab, setActiveTab}: {tabName: string; activeTab: string; setActiveTab: void}) => {
  const {theme} = useContext(ThemeContext);
  const isActive = tabName === activeTab;
  return (
    <TabButton onClick={() => setActiveTab(tabName)} isActive={isActive} type="button">
      {tabName}
    </TabButton>
  );
};

export default TabsNavItem;
