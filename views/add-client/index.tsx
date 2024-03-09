import { Button, Div, Form, H2, Input, Label } from '@stylin.js/elements';
import { FC, useId } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { DashboardLayout } from '@/components';
import { useAuth } from '@/context/auth';

import { ClientForm } from './add-client.types';

const AddClient: FC = () => {
  const id = useId();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm<ClientForm>();

  const submit = async ({
    name,
    phone,
    address,
    email,
    flexId,
    pn,
  }: ClientForm) => {
    try {
      const body = {
        name: name,
        email_address: email,
        address: address,
        phone_number: phone,
        flex_id: flexId,
        sn: pn,
        plan: '',
        attributes_map: [],
      };

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clients`, {
        headers: {
          Authorization: `Bearer ${user!.token}`,
        },
        method: 'POST',
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.log({ e });
      throw e;
    }
  };

  const onSubmit = (data: ClientForm) =>
    toast.promise(submit(data), {
      loading: 'Adiconando...',
      success: 'Utilizador adicionado com sucesso!',
      error: 'Alguma coisa correu mal',
    });

  return (
    <DashboardLayout>
      <Div py="5rem" px="2rem" position="relative" ml="1rem">
        <H2 fontWeight="400" fontSize="2.5rem">
          Adicionar novo cliente
        </H2>
        <Form
          mt="2rem"
          gap="1rem"
          display="flex"
          maxWidth="50rem"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Div display="flex" flexDirection="column" gap="1rem">
            <Label fontSize="1.25rem" htmlFor={`${id}-name`}>
              Nome do cliente
            </Label>
            <Input
              all="unset"
              px="1rem"
              height="3rem"
              id={`${id}-name`}
              border="1.24px solid"
              borderRadius="0.5rem"
              borderColor="#3838388A"
              {...register('name')}
            />
          </Div>
          <Div display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="1rem">
            <Div display="flex" flexDirection="column" gap="1rem">
              <Label fontSize="1.25rem" htmlFor={`${id}-type`}>
                Tipo de equipamento
              </Label>
              <Input
                all="unset"
                px="1rem"
                height="3rem"
                id={`${id}-type`}
                border="1.24px solid"
                borderRadius="0.5rem"
                borderColor="#3838388A"
                {...register('type')}
              />
            </Div>
            <Div display="flex" flexDirection="column" gap="1rem">
              <Label fontSize="1.25rem" htmlFor={`${id}-pn`}>
                PN
              </Label>
              <Input
                all="unset"
                px="1rem"
                height="3rem"
                id={`${id}-pn`}
                border="1.24px solid"
                borderRadius="0.5rem"
                borderColor="#3838388A"
                {...register('pn')}
              />
            </Div>
            <Div display="flex" flexDirection="column" gap="1rem">
              <Label fontSize="1.25rem" htmlFor={`${id}-flexId`}>
                Flex-ID
              </Label>
              <Input
                all="unset"
                px="1rem"
                height="3rem"
                id={`${id}-flexId`}
                border="1.24px solid"
                borderRadius="0.5rem"
                borderColor="#3838388A"
                {...register('flexId')}
              />
            </Div>
          </Div>
          <Div display="flex" flexDirection="column" gap="1rem">
            <Label fontSize="1.25rem" htmlFor={`${id}-address`}>
              Endereço
            </Label>
            <Input
              all="unset"
              px="1rem"
              height="3rem"
              id={`${id}-address`}
              border="1.24px solid"
              borderRadius="0.5rem"
              borderColor="#3838388A"
              {...register('address')}
            />
          </Div>
          <Div display="flex" flexDirection="column" gap="1rem">
            <Label fontSize="1.25rem" htmlFor={`${id}-contact`}>
              Contato com DDD
            </Label>
            <Input
              all="unset"
              px="1rem"
              height="3rem"
              id={`${id}-contact`}
              border="1.24px solid"
              borderRadius="0.5rem"
              borderColor="#3838388A"
              {...register('phone')}
            />
          </Div>
          <Div display="flex" flexDirection="column" gap="1rem">
            <Label fontSize="1.25rem" htmlFor={`${id}-contact`}>
              Email
            </Label>
            <Input
              all="unset"
              px="1rem"
              height="3rem"
              id={`${id}-contact`}
              border="1.24px solid"
              borderRadius="0.5rem"
              borderColor="#3838388A"
              {...register('email')}
            />
          </Div>
          <Div mt="3rem">
            <Button
              all="unset"
              px="4rem"
              type="submit"
              display="flex"
              color="#FFFFFF"
              fontWeight="300"
              height="2.678rem"
              fontSize="1.875rem"
              alignItems="center"
              borderRadius="0.4rem"
              justifyContent="center"
              bg="linear-gradient(90deg, #FF7600 0%, #FF5C00 100%)"
            >
              Adicionar
            </Button>
          </Div>
        </Form>
      </Div>
    </DashboardLayout>
  );
};

export default AddClient;
