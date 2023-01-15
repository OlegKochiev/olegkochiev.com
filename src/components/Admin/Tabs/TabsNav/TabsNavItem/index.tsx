import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const TabButton = styled.button.attrs({
  type: 'button',
})`
  padding: 30px;
  border-left: 6px solid transparent;
  border-left-color: ${({theme, isActive}) => (isActive ? theme.theme.blueColor : 'transparent')};
  background-color: ${({theme, isActive}) => (isActive ? theme.theme.backgroundColor : 'inherit')};
`;

const TabsNavItem = ({tabName, activeTab, setActiveTab}: {tabName: string; activeTab: string; setActiveTab: void}) => {
  const {theme} = useContext(ThemeContext);
  const isActive = tabName === activeTab;
  return (
    <TabButton onClick={() => setActiveTab(tabName)} isActive={isActive}>
      {tabName}
    </TabButton>
  );
};

export default TabsNavItem;
