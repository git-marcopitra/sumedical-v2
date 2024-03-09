import { NextPage } from 'next';
import Head from 'next/head';

import Clients from '@/views/clients';

const ClientsPage: NextPage = () => (
  <>
    <Head>
      <title>Clientes | SUMedical</title>
    </Head>
    <Clients />
  </>
);

export default ClientsPage;
