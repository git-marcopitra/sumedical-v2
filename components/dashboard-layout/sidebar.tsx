import { Aside, Div, Img, Li, Menu, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants/routes';
import { useAuth } from '@/context/auth';
import { colors } from '@/styles/theme/colors';
import { radii } from '@/styles/theme/radii';
import { space } from '@/styles/theme/space';

import { CircleSVG, LogoutSVG } from '../svg';

const Sidebar: FC = () => {
  const { updateUser } = useAuth();
  const { pathname } = useRouter();
  const logout = () => updateUser(null);

  return (
    <Aside
      py="2rem"
      my="-1rem"
      width="20rem"
      display="flex"
      px={space['2xl']}
      position="relative"
      bg={colors.primary}
      flexDirection="column"
      color={colors.onPrimary}
      boxShadow="2rem 0 1rem #0003"
      justifyContent="space-between"
      borderTopRightRadius={radii.l}
      borderBottomRightRadius={radii.l}
    >
      <Div mt={space['4xl']}>
        <Div
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" mt={space.m}>
            <CircleSVG maxHeight="9rem" maxWidth="9rem" width="100%" />
          </Div>
          <Img src="/logo.png" alt="logo" />
        </Div>
        <Menu
          py={space.l}
          px={space.s}
          gap={space.xl}
          display="flex"
          mt={space['4xl']}
          flexDirection="column"
        >
          <Link href={Routes[RoutesEnum.Dashboard]}>
            <Li
              all="unset"
              py={space.m}
              px={space.l}
              display="block"
              border="1px solid"
              borderRadius={radii.m}
              borderColor={colors.onPrimary}
              bg={
                pathname === Routes[RoutesEnum.Dashboard]
                  ? colors.onPrimary
                  : 'transparent'
              }
              color={
                colors[
                  pathname === Routes[RoutesEnum.Dashboard]
                    ? 'onSurface'
                    : 'onPrimary'
                ]
              }
            >
              Dashboard
            </Li>
          </Link>
          <Link href={Routes[RoutesEnum.Clients]}>
            <Li
              all="unset"
              py={space.m}
              px={space.l}
              display="block"
              border="1px solid"
              borderRadius={radii.m}
              borderColor={colors.onPrimary}
              bg={
                pathname.includes(Routes[RoutesEnum.Clients])
                  ? colors.onPrimary
                  : 'transparent'
              }
              color={
                colors[
                  pathname.includes(Routes[RoutesEnum.Clients])
                    ? 'onSurface'
                    : 'onPrimary'
                ]
              }
            >
              Clients
            </Li>
          </Link>
        </Menu>
      </Div>
      <Div
        mx={space.m}
        gap={space.l}
        display="flex"
        cursor="pointer"
        onClick={logout}
        alignItems="center"
      >
        <LogoutSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
        <Span>Encerrar sessão</Span>
      </Div>
    </Aside>
  );
};
export default Sidebar;
