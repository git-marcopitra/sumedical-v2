import { Br, Button, Div, H2, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import unikey from 'unikey';

import { DashboardLayout } from '@/components';
import { FilterSVG } from '@/components/svg';
import { useAuth } from '@/context/auth';

import {
  STATUS_BG_COLOR,
  STATUS_BOX_SHADOW_COLOR,
  STATUS_COLOR,
  STATUS_TAG_COLOR,
} from './clients.data';
import { Client } from './clients.types';

const Clients: FC = () => {
  const { user } = useAuth();
  const [clients, setClients] = useState<ReadonlyArray<Client>>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clients`, {
      headers: {
        Authorization: `Bearer ${user!.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setClients(data.clients))
      .catch(console.log);
  }, []);

  return (
    <DashboardLayout>
      <Div my="5rem" mx="2rem">
        <Div display="flex" justifyContent="space-between">
          <H2 fontWeight="400" fontSize="2.5rem" ml="1rem">
            Clientes
          </H2>
          <Div display="flex" gap="1rem">
            <Button
              all="unset"
              px="1.2rem"
              bg="#D9D9D9"
              height="3rem"
              display="flex"
              alignItems="center"
              borderRadius="0.4rem"
              justifyContent="center"
            >
              <FilterSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Button>
            <Button
              all="unset"
              px="1.5rem"
              height="3rem"
              display="flex"
              color="#FFFFFF"
              alignItems="center"
              borderRadius="0.4rem"
              justifyContent="center"
              textTransform="uppercase"
              bg="linear-gradient(180deg, #FF7600 0%, #FF5C00 100%)"
            >
              Add
            </Button>
          </Div>
        </Div>
        <Div display="grid" gridTemplateColumns="repeat(5, 1fr)" my="2rem">
          <P ml="1rem">Nome</P>
          <P ml="1rem">Equipamento</P>
          <P ml="1rem">Status</P>
          <P ml="1rem">Local</P>
          <P ml="1rem">Contacto</P>
        </Div>
        {clients?.map((client) => {
          const device =
            client.devices.find(({ status }) => status === 'ALERTA') ??
            client.devices.find(({ status }) => status === 'ATENCAO') ??
            client.devices.find(({ status }) => status === 'OK');

          return (
            <Div
              p="0.5rem"
              key={unikey()}
              display="grid"
              minHeight="4rem"
              alignItems="center"
              borderBottom="1px solid #1E1E1E4A"
              gridTemplateColumns="repeat(5, 1fr)"
              color={device ? STATUS_COLOR[device.status] : STATUS_COLOR.OK}
              bg={device ? STATUS_BG_COLOR[device.status] : STATUS_BG_COLOR.OK}
              boxShadow={
                device
                  ? STATUS_BOX_SHADOW_COLOR[device.status]
                  : STATUS_BG_COLOR.OK
              }
            >
              <P>{client.name}</P>
              <P ml="1rem">
                {device ? (
                  <>
                    {device.device_model}
                    <Br />
                    {device?.device_name}
                  </>
                ) : (
                  '--'
                )}
              </P>
              <P
                color="#FFF"
                maxWidth="5rem"
                textAlign="center"
                borderRadius="0.6rem"
                bg={device ? STATUS_TAG_COLOR[device.status] : '#999999'}
              >
                {device?.status ?? 'NULL'}
              </P>
              <P ml="1rem">{client.address}</P>
              <P ml="1rem">{client.phone_number}</P>
            </Div>
          );
        })}
      </Div>
    </DashboardLayout>
  );
};

export default Clients;
