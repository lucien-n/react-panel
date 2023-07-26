import { Security } from "./security";

export type Device = {
  id: string;
  clientId: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  cpu: string;
  ram: string;
  storage: string;
  hardwareId: string;
  security: Security;
  user: string;
  lastCheckInDate: number;
};
