import React from 'react';
import {useSession} from 'next-auth/react';
import PageContainer from '../../components/PageContainer';

const Admin = () => {
  console.log('hello admin');

  const session = useSession();
  console.log(session);

  return <PageContainer>Admin</PageContainer>;
};

export default Admin;
