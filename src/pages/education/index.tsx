import React from 'react';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import ThemeContainer from '../../components/ThemeContainer';
import Footer from '../../components/Footer/Footer';

const EducationPage = () => {
  return (
    <ThemeContainer>
      <PageContainer>
        <Header />
        <Footer />
      </PageContainer>
    </ThemeContainer>
  );
};

export default EducationPage;
