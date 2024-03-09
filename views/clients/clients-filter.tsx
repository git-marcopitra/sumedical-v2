import { Div, Input, Label, P } from '@stylin.js/elements';
import { FC, useId } from 'react';
import { useFormContext } from 'react-hook-form';

import { STATUS_TAG_COLOR } from './clients.data';
import { ClientFilterForm } from './clients.types';

const ClientsFilter: FC = () => {
  const id = useId();
  const { register, setValue, getValues } = useFormContext<ClientFilterForm>();

  return (
    <Div
      p="1rem"
      top="4rem"
      bg="#FFFEFE"
      position="absolute"
      borderRadius="1rem"
      border="1px solid #0004"
      boxShadow="13px 10px 11px 0px #00000040"
    >
      <Label
        mt="0.5rem"
        ml="0.5rem"
        mb="0.25rem"
        display="inline-block"
        htmlFor={`${id}-location`}
      >
        Localização
      </Label>
      <Input
        all="unset"
        px="1rem"
        width="18.5rem"
        height="2.5rem"
        border="1.24px solid"
        id={`${id}-location`}
        borderRadius="0.5rem"
        borderColor="#3838388A"
        {...register('location')}
      />
      <Label
        mt="0.5rem"
        ml="0.5rem"
        mb="0.25rem"
        display="inline-block"
        htmlFor={`${id}-type`}
      >
        Tipo de equipamento
      </Label>
      <Input
        all="unset"
        px="1rem"
        width="18.5rem"
        height="2.5rem"
        border="1.24px solid"
        id={`${id}-type`}
        borderRadius="0.5rem"
        borderColor="#3838388A"
        {...register('type')}
      />
      <P mt="0.5rem" ml="0.5rem" mb="0.25rem">
        Status
      </P>
      <Div gap="0.5rem" display="grid" gridTemplateColumns="1fr 1fr">
        <Div display="flex" gap="0.25rem">
          <Label
            flex="1"
            color="#FFF"
            display="block"
            width="5rem"
            textAlign="center"
            borderRadius="0.6rem"
            bg={STATUS_TAG_COLOR.OK}
            htmlFor={`${id}-status-ok`}
          >
            OK
          </Label>
          <Input
            type="checkbox"
            id={`${id}-status-ok`}
            onChange={() => {
              const status = getValues('status');
              setValue(
                'status',
                status.includes('OK')
                  ? status.filter((item) => item !== 'OK')
                  : [...status, 'OK']
              );
            }}
          />
        </Div>
        <Div display="flex" gap="0.25rem">
          <Label
            flex="1"
            color="#FFF"
            display="block"
            textAlign="center"
            borderRadius="0.6rem"
            bg={STATUS_TAG_COLOR.ALERTA}
            htmlFor={`${id}-status-alert`}
          >
            ALERTA
          </Label>
          <Input
            type="checkbox"
            id={`${id}-status-alert`}
            onChange={() => {
              const status = getValues('status');
              setValue(
                'status',
                status.includes('ALERTA')
                  ? status.filter((item) => item !== 'ALERTA')
                  : [...status, 'ALERTA']
              );
            }}
          />
        </Div>
        <Div display="flex" gap="0.25rem">
          <Label
            flex="1"
            color="#FFF"
            display="block"
            width="5rem"
            textAlign="center"
            borderRadius="0.6rem"
            bg={STATUS_TAG_COLOR.ATENCAO}
            htmlFor={`${id}-status-attention`}
          >
            ATENÇÃO
          </Label>
          <Input
            type="checkbox"
            id={`${id}-status-attention`}
            onChange={() => {
              const status = getValues('status');
              setValue(
                'status',
                status.includes('ATENCAO')
                  ? status.filter((item) => item !== 'ATENCAO')
                  : [...status, 'ATENCAO']
              );
            }}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default ClientsFilter;
