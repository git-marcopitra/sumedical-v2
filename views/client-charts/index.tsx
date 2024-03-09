import { Div, Label, Option, Select } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { ArrowDownSVG } from '@/components/svg';
import { useAuth } from '@/context/auth';

import { Attributes } from './client-charts.types';

const ClientCharts: FC = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const [, setData] = useState<ReadonlyArray<Attributes>>();

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
    <Div p="2rem 4rem">
      <Label
        p="1rem"
        gap="0.5rem"
        bg="#078493"
        color="#ffffff"
        htmlFor="#select"
        fontSize="1.5rem"
        alignItems="center"
        display="inline-flex"
        borderRadius="0 2rem"
        boxShadow="12px 13px 15px 0px #00000040"
      >
        <ArrowDownSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        <Select all="unset">
          <Option>Unimagem - Estrela (RS)</Option>
          <Option>Cliente x - x (RS)</Option>
        </Select>
      </Label>
    </Div>
  );
};

export default ClientCharts;
