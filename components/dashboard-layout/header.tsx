import { Div, Header as HTMLHeader, Input, P } from '@stylin.js/elements';
import { FC } from 'react';

import { useAuth } from '@/context/auth';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/font-sizes';
import { radii } from '@/styles/theme/radii';
import { space } from '@/styles/theme/space';

import { SearchSVG, UserSVG } from '../svg';

const ROLES = {
  super: 'Adminstrador',
  client: 'Cliente',
};

const Header: FC = () => {
  const { user } = useAuth();

  return (
    <HTMLHeader
      p={space.l}
      ml="-7rem"
      pl="12rem"
      display="flex"
      alignItems="center"
      bg={colors.secondary}
      color={colors.onPrimary}
      justifyContent="space-between"
    >
      <Div
        px={space.l}
        display="flex"
        minWidth="20rem"
        alignItems="center"
        border="1px solid"
        borderRadius={radii.full}
      >
        <SearchSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        <Input
          all="unset"
          flex="1"
          p={space.l}
          type="search"
          color={colors.onPrimary}
          nPlaceholder={{
            color: `${colors.onPrimary}88`,
          }}
          placeholder="O que você procura..."
        />
      </Div>
      <Div
        py={space.m}
        px={space.xl}
        gap={space.s}
        display="flex"
        border="1px solid"
        alignItems="center"
        borderRadius={radii.s}
      >
        <Div>
          <UserSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
        </Div>
        <Div>
          <P>{user?.fullName}</P>
          <P fontSize={fontSizes.s} fontWeight="300">
            {user?.role ? ROLES[user?.role] ?? user?.role : ''}
          </P>
        </Div>
      </Div>
    </HTMLHeader>
  );
};

export default Header;
