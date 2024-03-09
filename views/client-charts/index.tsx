import { Div } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { useAuth } from '@/context/auth';

import { Attributes } from './client-charts.types';

const ClientCharts: FC = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const [data, setData] = useState<ReadonlyArray<Attributes>>();

  const id = (query.id as string) ?? user?.id;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${user!.token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.attributes_map))
      .catch(console.log);
  }, []);

  return (
    <Div>
      <></>
      {JSON.stringify(data)}
    </Div>
  );
};

export default ClientCharts;
