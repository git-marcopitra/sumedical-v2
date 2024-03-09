import { Button, Div, H2 } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DashboardLayout } from '@/components';
import { FilterSVG } from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants/routes';

import { ClientFilterForm } from './clients.types';
import ClientsFilter from './clients-filter';
import ClientsList from './clients-list';

const Clients: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const clientFilterForm = useForm<ClientFilterForm>({
    defaultValues: {
      type: '',
      status: [],
      location: '',
    },
  });

  return (
    <DashboardLayout>
      <FormProvider {...clientFilterForm}>
        <Div py="5rem" px="2rem" position="relative">
          {isFilterOpen && (
            <Div
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="#FFFFFF33"
              position="absolute"
              backdropFilter="blur(2px)"
              onClick={() => setIsFilterOpen(false)}
            />
          )}
          <Div display="flex" justifyContent="space-between">
            <H2 fontWeight="400" fontSize="2.5rem" ml="1rem">
              Clientes
            </H2>
            <Div display="flex" gap="1rem">
              <Div
                display="flex"
                alignItems="end"
                position="relative"
                flexDirection="column"
              >
                <Button
                  all="unset"
                  px="1.2rem"
                  bg="#D9D9D9"
                  height="3rem"
                  display="flex"
                  position="relative"
                  alignItems="center"
                  borderRadius="0.4rem"
                  justifyContent="center"
                  onClick={() => setIsFilterOpen((v) => !v)}
                >
                  <FilterSVG
                    maxWidth="1.5rem"
                    maxHeight="1.5rem"
                    width="100%"
                  />
                </Button>
                {isFilterOpen && <ClientsFilter />}
              </Div>
              <Link href={Routes[RoutesEnum.AddClient]}>
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
              </Link>
            </Div>
          </Div>
          <ClientsList />
        </Div>
      </FormProvider>
    </DashboardLayout>
  );
};

export default Clients;
