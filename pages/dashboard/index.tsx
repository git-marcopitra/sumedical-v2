import { NextPage } from 'next';
import Head from 'next/head';

import Dashboard from '@/views/dashboard';

const DashboardPage: NextPage = () => (
  <>
    <Head>
      <title>Dashboard | Sumedical</title>
    </Head>
    <Dashboard />
  </>
);

export default DashboardPage;
