import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DEFAULT_ACTIVE_TAB} from '../../../constants';
import ActiveTab from './ActiveTab/Index';
import TabsNav from './TabsNav';

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
`;

const TabsContent = styled.div``;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE_TAB);

  return (
    <Container>
      <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabsContent>
        <ActiveTab activeTab={activeTab} />
      </TabsContent>
    </Container>
  );
};

export default Tabs;
