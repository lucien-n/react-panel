import { TSecurity } from "./types/security";

export const isSilent = (lastCheckInDate: number): boolean => {
  return new Date().getTime() / 1000 - lastCheckInDate > 30 * 24 * 60 * 60;
};

export const isHealthy = (deviceSecurity: TSecurity): boolean => {
  return Object.values(deviceSecurity).every((security) => security);
};
