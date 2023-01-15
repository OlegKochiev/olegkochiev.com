import React from 'react';
import AboutMeTab from '../AboutMeTab';
import EducationTab from '../EducationTab';
import PortfolioTab from '../PortfolioTab';

const ActiveTab = ({activeTab}: {activeTab: string}) => {
  const tabs = {
    portfolio: <PortfolioTab />,
    education: <EducationTab />,
    aboutMe: <AboutMeTab />,
  };
  return tabs[activeTab];
};

export default ActiveTab;
