import { NextPage } from 'next';
import Head from 'next/head';

import Login from '@/views/login';

const LoginPage: NextPage = () => (
  <>
    <Head>
      <title>Login | Sumedical</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
