import { useState } from "react";
import SelectClient from "./SelectClient";
import Devices from "./Devices";
import Info from "./Info";
import { TDevice } from "../types/device";
import SelectPage from "./SelectPage";
import { Box } from "@mui/material";
import Filter from "./Filter";
import { isHealthy, isSilent } from "../helper";

const Panel = () => {
  const [clientId, setClientId] = useState<string>("");
  const [devices, setDevices] = useState<TDevice[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const [healthyFilter, setHealthyFilter] = useState<boolean>(false);
  const [silentFilter, setSilentFilter] = useState<boolean>(false);
  const [notSecuredFilter, setNotSecuredFilter] = useState<boolean>(false);

  const filter = (devices: TDevice[]) => {
    const filteredDevices = devices.filter((device) => {
      if (!healthyFilter && !silentFilter && !notSecuredFilter) return true;
      if (healthyFilter && isHealthy(device.security)) return true;
      if (silentFilter && isSilent(device.lastCheckInDate)) return true;
      if (
        notSecuredFilter &&
        !isHealthy(device.security) &&
        !isSilent(device.lastCheckInDate)
      )
        return true;
      return false;
    });

    return filteredDevices;
  };

  return (
    <>
      <Box display="flex">
        <SelectClient clientId={clientId} setClientId={setClientId} />
        <SelectPage page={page} setPage={setPage} totalDevices={totalDevices} />
        <Info devices={devices} totalDevices={totalDevices}></Info>
        <Filter
          name="healthyFilter"
          onChange={() => setHealthyFilter(!healthyFilter)}
        />
        <Filter
          name="silentFilter"
          onChange={() => setSilentFilter(!silentFilter)}
        />
        <Filter
          name="notSecuredFilter"
          onChange={() => setNotSecuredFilter(!notSecuredFilter)}
        />
      </Box>
      <Devices
        clientId={clientId}
        page={page}
        devices={filter(devices)}
        setDevices={setDevices}
        setTotalDevices={setTotalDevices}
      />
    </>
  );
};

export default Panel;
