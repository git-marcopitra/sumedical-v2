import { Button, Form, Input, Label, Span, U } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { AuthLayout } from '@/components';
import { Routes, RoutesEnum } from '@/constants/routes';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/font-sizes';
import { radii } from '@/styles/theme/radii';
import { space } from '@/styles/theme/space';

const Recover: FC = () => {
  return (
    <AuthLayout>
      <Form
        width="100%"
        display="flex"
        gap={space.xl}
        maxWidth="25rem"
        flexDirection="column"
      >
        <Label
          gap={space.s}
          display="flex"
          flexDirection="column"
          color={colors.onPrimary}
        >
          <Span fontSize={fontSizes.xl}>Email:</Span>
          <Input
            py={space.m}
            px={space.l}
            type="text"
            border="none"
            borderRadius={radii.s}
            fontSize={fontSizes.l}
            boxShadow="0 1.4rem 1rem #0004"
            placeholder="email@exemplo.com.br"
          />
        </Label>
        <Button
          mt={space.l}
          p={space.s}
          border="none"
          cursor="pointer"
          bg={colors.secondary}
          borderRadius={radii.s}
          fontSize={fontSizes.l}
          color={colors.onPrimary}
          borderTop="1px solid white"
          borderBottom="1px solid white"
          boxShadow="inset 0 0 1rem #0004"
          transition="transform 300ms ease-in-out"
          nHover={{
            transform: 'scale(1.02)',
          }}
        >
          Recuperar conta
        </Button>
        <Span textAlign="center">
          Já tem uma conta?{' '}
          <Link href={Routes[RoutesEnum.Login]}>
            <U>Clique aqui</U>
          </Link>
        </Span>
      </Form>
    </AuthLayout>
  );
};

export default Recover;
