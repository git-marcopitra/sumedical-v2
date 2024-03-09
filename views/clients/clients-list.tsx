import { Br, Div, P } from '@stylin.js/elements';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { useAuth } from '@/context/auth';

import {
  STATUS_BG_COLOR,
  STATUS_BOX_SHADOW_COLOR,
  STATUS_COLOR,
  STATUS_TAG_COLOR,
} from './clients.data';
import { Client, ClientFilterForm } from './clients.types';

const ClientsList: FC = () => {
  const { user } = useAuth();
  const { control } = useFormContext<ClientFilterForm>();
  const [clients, setClients] = useState<ReadonlyArray<Client>>([]);

  const { location, type, status: statusFilter } = useWatch({ control });

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
    <>
      <Div display="grid" gridTemplateColumns="repeat(5, 1fr)" my="2rem">
        <P ml="1rem">Nome</P>
        <P ml="1rem">Equipamento</P>
        <P ml="1rem">Status</P>
        <P ml="1rem">Local</P>
        <P ml="1rem">Contacto</P>
      </Div>
      {clients?.reduce((acc, client) => {
        const device =
          client.devices.find(
            ({ status }) =>
              status === 'ALERTA' &&
              (statusFilter?.length ? statusFilter.includes(status) : true)
          ) ??
          client.devices.find(
            ({ status }) =>
              status === 'ATENCAO' &&
              (statusFilter?.length ? statusFilter.includes(status) : true)
          ) ??
          client.devices.find(
            ({ status }) =>
              status === 'OK' &&
              (statusFilter?.length ? statusFilter.includes(status) : true)
          );

        if (
          !client.address.includes(location!) ||
          (type && !device?.device_model.includes(type)) ||
          (statusFilter?.length &&
            !statusFilter.includes(
              device?.status as 'OK' | 'ALERTA' | 'ATENCAO'
            ))
        )
          return acc;

        return [
          ...acc,
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
          </Div>,
        ];
      }, [] as Array<ReactNode>)}
    </>
  );
};

export default ClientsList;
