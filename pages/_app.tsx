import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { ThemeManager } from '@/components';
import { AuthProvider } from '@/context/auth';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeManager>
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  </ThemeManager>
);

export default App;
