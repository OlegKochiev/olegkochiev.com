import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const TabButton = styled.button.attrs({
  type: 'button',
})`
  padding: 30px;
  border-left: 6px solid transparent;
  border-left-color: {({theme, isActive}) => isActive ? theme.blueColor : "transparent"};
  background-color: {({theme, isActive}) => isActive ? theme.backgroundColor : "inherit"};
`;

const TabsNavItem = ({tabName, activeTab, setActiveTab}: {tabName: string; activeTab: string; setActiveTab: void}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TabButton onClick={() => setActiveTab(tabName)} isActive={tabName === activeTab ? true : false} theme={theme}>
      {tabName}
    </TabButton>
  );
};

export default TabsNavItem;
