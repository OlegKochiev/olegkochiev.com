import React from 'react';
import {useSession} from 'next-auth/react';
import AdminPageLayout from '../../components/Admin/AdminPageLayout/AdminPageLayout';
import MainPageContent from '../../components/Admin/MainPageContent/MainPageContent';

const Admin = () => {
  const session = useSession();

  return (
    <AdminPageLayout>
      <MainPageContent />
    </AdminPageLayout>
  );
};

export default Admin;
