import { Device } from "./types/device";

export const getNumberOfHealthyDevices = (devices: Device[]) => {
  const healthyDevices = [];

  for (const device of devices) {
    if (isDeviceSilent(device) || !isDeviceSecured(device)) continue;
    healthyDevices.push(device);
  }

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
