import React from 'react';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import ThemeContainer from '../../components/ThemeContainer';
import Footer from '../../components/Footer/Footer';
import {Content} from '../portfolio';

const EducationPage = () => {
  return (
    <ThemeContainer>
      <PageContainer>
        <Header />
        <Content />
        <Footer />
      </PageContainer>
    </ThemeContainer>
  );
};

export default EducationPage;
