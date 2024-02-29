import { Div } from '@stylin.js/elements';
import { PropsWithChildren } from 'react';
import { FC } from 'react';

import { colors } from '@/styles/theme/colors';
import { space } from '@/styles/theme/space';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => (
  <Div
    p={space.l}
    height="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color={colors.onPrimary}
    backgroundImage="url('/login-bg.png')"
    backgroundPosition="center center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
  >
    {children}
  </Div>
);

export default AuthLayout;
