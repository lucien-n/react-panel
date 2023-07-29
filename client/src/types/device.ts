import { TSecurity } from "./security";

export type TDevice = {
  id: string;
  clientId: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  cpu: string;
  ram: string;
  storage: string;
  hardwareId: string;
  security: TSecurity;
  user: string;
  lastCheckInDate: number;
};
