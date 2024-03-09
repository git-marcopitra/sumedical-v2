interface Device {
  id: number;
  created_at: string;
  serial_key: string;
  updated_at: string;
  device_name: string;
  device_model: string;
  status: 'OK' | 'ALERTA' | 'ATENCAO';
}

interface ClientUser {
  id: number;
  role: 'client';
  full_name: string;
  updated_at: string;
  created_at: string;
  email_address: string;
}

export interface Client {
  id: number;
  sn: string;
  name: string;
  plan: string;
  flex_id: string;
  address: string;
  user: ClientUser;
  created_at: string;
  updated_at: string;
  phone_number: string;
  devices: ReadonlyArray<Device>;
}

export interface ClientFilterForm {
  type: string;
  location: string;
  status: ReadonlyArray<'OK' | 'ALERTA' | 'ATENCAO' | 'NULL'>;
}
