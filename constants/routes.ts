export enum RoutesEnum {
  Dashboard = 'dashboard',
  Login = 'login',
  Recover = 'recover',
  Clients = 'clients',
  AddClient = 'add-client',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Dashboard]: '/dashboard',
  [RoutesEnum.Login]: '/login',
  [RoutesEnum.Recover]: '/recover',
  [RoutesEnum.Clients]: '/dashboard/clients',
  [RoutesEnum.AddClient]: '/dashboard/clients/add',
};
