import React from 'react';
import Header from '../../components/Header/Header';
import PageContainer from '../../components/PageContainer';
import Footer from '../../components/Footer/Footer';
import {Content} from '../portfolio';

const EducationPage = () => {
  return (
    <PageContainer>
      <Header />
      <Content />
      <Footer />
    </PageContainer>
  );
};

export default EducationPage;
