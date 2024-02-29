import { NextPage } from 'next';
import Head from 'next/head';

import Recover from '@/views/recover';

const RecoverPage: NextPage = () => (
  <>
    <Head>
      <title>Recuperar Conta | Sumedical</title>
    </Head>
    <Recover />
  </>
);

export default RecoverPage;
