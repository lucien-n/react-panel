import { useState } from "react";
import SelectClient from "./SelectClient";
import Devices from "./Devices";
import Info from "./Info";
import { TDevice } from "../types/device";
import SelectPage from "./SelectPage";

const Panel = () => {
  const [clientId, setClientId] = useState<string>("");
  const [devices, setDevices] = useState<TDevice[]>([]);
  const [totalClientDevices, setTotalClientDevices] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <SelectClient setClientId={setClientId} />
      <SelectPage page={page} setPage={setPage} />
      <Info devices={devices} totalClientDevices={totalClientDevices}></Info>
      <Devices
        clientId={clientId}
        page={page}
        devices={devices}
        setDevices={setDevices}
        setTotalClientDevices={setTotalClientDevices}
      />
    </>
  );
};

export default Panel;
