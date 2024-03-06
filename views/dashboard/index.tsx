import { FC } from 'react';

import { DashboardLayout } from '@/components';

import ClientCharts from '../client-charts';

const Dashboard: FC = () => (
  <DashboardLayout>
    <ClientCharts />
  </DashboardLayout>
);

export default Dashboard;
