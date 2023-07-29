import { useEffect, useState } from "react";
import { TDevice } from "../types/device";
import Devices from "./Devices";
import SelectClient from "./SelectClient";
import SelectPage from "./SelectPage";
import InfoLine from "./InfoLine";
import SettingsSection from "./SettingsSection";
import Filter from "./Filter";
import { isHealthy, isSilent } from "../helper";

export default function Panel() {
  const [clientId, setClientId] = useState<string>("flash");
  const [devices, setDevices] = useState<TDevice[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [clients, setClients] = useState<string[]>(["flash"]);

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

  useEffect(() => {
    fetch(`/api/devices/${clientId}/${page}`)
      .then((res) => res.json())
      .then(({ devices, total }) => {
        setDevices(devices);
        setTotalDevices(total);
      });
  }, [clientId, page]);

  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((clients) => setClients(clients));
  });

  return (
    <>
      <div className="flex flex-col gap-6 col-span-1">
        <div className="flex gap-4">
          <SelectClient
            clients={clients}
            onChange={({ target: { value } }: { target: { value: string } }) =>
              setClientId(value)
            }
          />
          <SelectPage
            max={Math.ceil(totalDevices / 10)}
            onChange={({
              target: { value },
            }: {
              target: { value: string };
            }) => {
              setPage(parseInt(value) || 0);
            }}
          />
        </div>
        <SettingsSection>
          <InfoLine name="Total Devices" value={totalDevices} />
          <InfoLine name="On Page" value={devices.length} />
        </SettingsSection>

        <SettingsSection>
          <Filter
            name="Healthy"
            value="healty"
            onChange={() => setHealthyFilter(!healthyFilter)}
          ></Filter>
          <Filter
            name="Silent"
            value="silent"
            onChange={() => setSilentFilter(!silentFilter)}
          ></Filter>
          <Filter
            name="Not Secured"
            value="not-secured"
            onChange={() => setNotSecuredFilter(!notSecuredFilter)}
          ></Filter>
        </SettingsSection>
      </div>
      <div className="w-full">
        <Devices devices={filter(devices)} />
      </div>
    </>
  );
}
