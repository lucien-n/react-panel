import { Device } from "./types/device";

export const getNumberOfHealthyDevices = (devices: Device[]) => {
  const healthyDevices = devices.filter(
    (device) => isDeviceSecured(device) && !isDeviceSilent(device)
  );
  return healthyDevices.length;
};

export const isDeviceSilent = (device: Device): boolean => {
  const millisecondsInThirtyDays = 30 * 24 * 60 * 60 * 1_000;
  return (
    new Date().getTime() - new Date(device.lastCheckInDate * 1_000).getTime() >
    millisecondsInThirtyDays
  );
};

export const isDeviceSecured = (device: Device): boolean => {
  return Object.values(device.security).every((security) => security === true);
};

export const camelToTitleCase = (text: string): string => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};
