import { NextPage } from 'next';
import Head from 'next/head';

import Dashboard from '@/views/dashboard';

const DashboardPage: NextPage = () => (
  <>
    <Head>
      <title>Painel | SUMedical</title>
    </Head>
    <Dashboard />
  </>
);

export default DashboardPage;
