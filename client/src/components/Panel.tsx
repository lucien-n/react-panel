import { useState } from "react";
import SelectClient from "./SelectClient";
import Devices from "./Devices";
import Info from "./Info";
import { TDevice } from "../types/device";
import SelectPage from "./SelectPage";
import { Box } from "@mui/material";

const Panel = () => {
  const [clientId, setClientId] = useState<string>("");
  const [devices, setDevices] = useState<TDevice[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <Box display="flex">
        <SelectClient clientId={clientId} setClientId={setClientId} />
        <SelectPage page={page} setPage={setPage} totalDevices={totalDevices} />
        <Info devices={devices} totalDevices={totalDevices}></Info>
      </Box>
      <Devices
        clientId={clientId}
        page={page}
        devices={devices}
        setDevices={setDevices}
        setTotalDevices={setTotalDevices}
      />
    </>
  );
};

export default Panel;
