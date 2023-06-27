import React from 'react';
import {useSession} from 'next-auth/react';
import AdminPageLayout from '../../components/Admin/AdminPageLayout/AdminPageLayout';

const Admin = () => {
  const session = useSession();

  return <AdminPageLayout>admin</AdminPageLayout>;
};

export default Admin;
