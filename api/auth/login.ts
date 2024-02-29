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

export const login = (
  email: string,
  password: string
): Promise<LoginResponse> =>
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
  }).then((res) => {
    if (res.status === 200) return res.json();

    throw new Error('Failure');
  });
