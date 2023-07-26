import React, { useEffect, useState } from "react";
import { Device } from "./types/device";
import DeviceTableComponent from "./components/DeviceTable";
import './App.css';
import SelectClientComponent from "./components/SelectClient";

const App = () => {
  const clients = ['flash', 'zoom'];

  const [backendData, setBackendData] = useState<Device[]>([]);
  const [clientId, setClientId] = useState<string>(clients[0]);

  useEffect(() => {
    fetch(`/devices/${clientId}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, [clientId]);



  return (
    <>
      <SelectClientComponent clients={clients} onChange={(client: string) => setClientId(client)} />
      <DeviceTableComponent devices={backendData} />
    </>
  );
};

export default App;
