import { useRouter } from 'next/router';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { AuthLayout, MotionDiv } from '@/components';
import { CircleSVG } from '@/components/svg';
import { STORAGE_KEYS, StorageKey } from '@/constants';

export interface User {
  id: number;
  role: 'super';
  email: string;
  token: string;
  fullName: string;
}

export interface Auth {
  user: User | null;
  isLogged: boolean;
  updateUser: (data: User | null, rememberMe?: boolean) => void;
}

const AUTH_ROUTES = ['/recover', '/login'];

const authContext = createContext<Auth>({} as Auth);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = authContext;
  const { replace, pathname } = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const jsonData =
      sessionStorage.getItem(STORAGE_KEYS[StorageKey.USER_DATA]) ??
      localStorage.getItem(STORAGE_KEYS[StorageKey.USER_DATA]);

    if (jsonData) {
      setUser(JSON.parse(jsonData));

      if (AUTH_ROUTES.some((route) => pathname.includes(route)))
        replace('/dashboard');
    } else if (AUTH_ROUTES.every((route) => !pathname.includes(route)))
      replace('/login');

    setLoading(false);
  }, []);

  const updateUser = (data: User | null, rememberMe?: boolean) => {
    if (!data) {
      sessionStorage.removeItem(STORAGE_KEYS[StorageKey.USER_DATA]);
      localStorage.removeItem(STORAGE_KEYS[StorageKey.USER_DATA]);
      replace('/login');
      setUser(null);
      return;
    }

    (rememberMe ? localStorage : sessionStorage).setItem(
      STORAGE_KEYS[StorageKey.USER_DATA],
      JSON.stringify(data)
    );

    setUser(data);

    replace('/dashboard');
  };

  if (loading)
    return (
      <AuthLayout>
        <MotionDiv
          display="flex"
          justifyContent="center"
          animate={{ rotate: ['0deg', '359deg'] }}
          transition={{
            duration: 0.8,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <CircleSVG maxHeight="4rem" maxWidth="4rem" width="100%" />
        </MotionDiv>
      </AuthLayout>
    );

  return (
    <Provider
      value={{
        user,
        updateUser,
        isLogged: !!user,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuth = () => useContext(authContext);
