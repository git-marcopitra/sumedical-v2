import { Global } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

import { GlobalStyles } from '@/styles';

const ThemeManager: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    {children}
  </>
);

export default ThemeManager;
