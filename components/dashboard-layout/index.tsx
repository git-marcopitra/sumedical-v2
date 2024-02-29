import { Aside, Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from './header';
import Sidebar from './sidebar';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <Div display="flex" height="100vh">
    <Sidebar />
    <Aside flex="1">
      <Header />
      <Main>{children}</Main>
    </Aside>
  </Div>
);
export default DashboardLayout;
