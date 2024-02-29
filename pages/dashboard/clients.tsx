import { NextPage } from 'next';
import Head from 'next/head';

import Clients from '@/views/clients';

const ClientsPage: NextPage = () => (
  <>
    <Head>
      <title>Clients | Sumedical</title>
    </Head>
    <Clients />
  </>
);

export default ClientsPage;
