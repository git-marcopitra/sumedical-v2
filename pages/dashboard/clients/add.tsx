import { NextPage } from 'next';
import Head from 'next/head';

import AddClient from '@/views/add-client';

const AddClientPage: NextPage = () => (
  <>
    <Head>
      <title>Adicionar Cliente | SUMedical</title>
    </Head>
    <AddClient />
  </>
);

export default AddClientPage;
