import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DEFAULT_ACTIVE_TAB} from '../../../constants';
import TabsNav from './TabsNav';

const Container = styled.div`
  display: grid;
`;

const TabsContent = styled.div``;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE_TAB);

  return (
    <Container>
      <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabsContent>{activeTab}</TabsContent>
    </Container>
  );
};

export default Tabs;
