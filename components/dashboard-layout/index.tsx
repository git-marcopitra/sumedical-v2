import { Aside, Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from './header';
import Sidebar from './sidebar';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <Div display="flex" height="100vh" maxHeight="100vh" overflow="hidden">
    <Sidebar />
    <Aside flex="1" display="flex" flexDirection="column">
      <Header />
      <Main overflowY="auto">{children}</Main>
    </Aside>
  </Div>
);
export default DashboardLayout;
