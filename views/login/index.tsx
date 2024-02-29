import { Button, Div, Form, Input, Label, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { login } from '@/api/auth/login';
import { AuthLayout } from '@/components';
import { EyeSlashedSVG, EyeSVG } from '@/components/svg';
import { useAuth } from '@/context/auth';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/font-sizes';
import { radii } from '@/styles/theme/radii';
import { space } from '@/styles/theme/space';

import { LoginForm } from './login.types';

const Login: FC = () => {
  const { updateUser } = useAuth();
  const { register, handleSubmit } = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
  });
  const [isPasswordHidden, setHidePassword] = useState(true);

  const handleLogin = async (email: string, password: string) => {
    const data = await login(email, password);

    updateUser({
      id: data.user.id,
      role: data.user.role,
      token: data.meta.token,
      fullName: data.user.full_name,
      email: data.user.email_address,
    });
  };

  const onSubmit = async ({ email, password }: LoginForm) =>
    toast.promise(handleLogin(email, password), {
      loading: 'Logando...',
      success: 'Login bem sucedido',
      error: 'Alguma coisa correu mal!',
    });

  return (
    <AuthLayout>
      <Form
        width="100%"
        display="flex"
        gap={space.xl}
        maxWidth="25rem"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label
          gap={space.s}
          display="flex"
          flexDirection="column"
          color={colors.onPrimary}
        >
          <Span fontSize={fontSizes.xl}>Email:</Span>
          <Input
            type="text"
            py={space.m}
            px={space.l}
            border="none"
            {...register('email')}
            borderRadius={radii.m}
            fontSize={fontSizes.l}
            boxShadow="0 1.4rem 1rem #0004"
            placeholder="email@exemplo.com.br"
          />
        </Label>
        <Label
          gap={space.s}
          display="flex"
          flexDirection="column"
          color={colors.onPrimary}
        >
          <Span fontSize={fontSizes.xl}>Senha:</Span>
          <Div
            bg="white"
            display="flex"
            overflow="hidden"
            alignItems="center"
            borderRadius={radii.m}
            boxShadow="0 1.4rem 1rem #0004"
          >
            <Input
              flex="1"
              py={space.m}
              px={space.l}
              border="none"
              fontSize={fontSizes.l}
              {...register('password')}
              placeholder="Palavra-passe"
              type={isPasswordHidden ? 'password' : 'text'}
            />
            <Span
              mx={space.l}
              width="1.5rem"
              display="flex"
              cursor="pointer"
              alignItems="center"
              color={colors.onSurface}
              onClick={() => setHidePassword((v) => !v)}
            >
              {isPasswordHidden ? (
                <EyeSlashedSVG
                  width="100%"
                  maxWidth="1.5rem"
                  maxHeight="1.5rem"
                />
              ) : (
                <EyeSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
              )}
            </Span>
          </Div>
        </Label>
        <Button
          mt={space.l}
          p={space.s}
          border="none"
          cursor="pointer"
          bg={colors.secondary}
          borderRadius={radii.m}
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
          Entrar
        </Button>
        <Span textAlign="center">
          Esqueceu a senha? <Link href="/recover">Clique aqui</Link>
        </Span>
      </Form>
    </AuthLayout>
  );
};

export default Login;
