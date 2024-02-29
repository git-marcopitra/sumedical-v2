interface LoginError {
  status: `${number}`;
  message: string;
}
interface LoginResponse {
  user: {
    id: number;
    role: 'super';
    full_name: string;
    created_at: string;
    updated_at: string;
    email_address: string;
  };
  meta: {
    token: string;
  };
}

export const hasLoginError = (
  arg: LoginResponse | LoginError
): arg is LoginError => !!(arg as LoginError).status;

export const login = (
  email: string,
  password: string
): Promise<LoginResponse | LoginError> =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email_address: email,
      password,
    }),
  }).then(async (res) => res.json());
