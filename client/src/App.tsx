import React, { useEffect, useState } from "react";
import { Device } from "./types/device";
import DeviceTableComponent from "./components/DeviceTable";
import './App.css';
import SelectClientComponent from "./components/SelectClient";
import { getNumberOfHealthyDevices } from "./helper";



const App = () => {
  const clients = ['flash', 'zoom'];

  const [backendData, setBackendData] = useState<Device[]>([]);
  const [clientId, setClientId] = useState<string>(clients[0]);

  useEffect(() => {
    fetch(`/devices/${clientId}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, [clientId]);

  const percentageOfHealthyDevices = Math.floor((getNumberOfHealthyDevices(backendData) / backendData.length) * 100);

  return (
    (backendData) ?
      <>
        <SelectClientComponent clients={clients} onChange={(client: string) => setClientId(client)} />
        <div>
          {backendData ? <p>{backendData.length} device(s)</p> : <p>Please select a client</p>}
          <p>{percentageOfHealthyDevices}% of devices are healthy</p>
        </div>
        <DeviceTableComponent devices={backendData} />
      </>
      :
      <p>Loading</p>
  );
};

export default App;
