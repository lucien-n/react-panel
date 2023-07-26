import React, { useEffect, useState } from "react";
import { Device } from "./types/device";
import DeviceComponent from "./components/Device";
import './App.css';

const App = () => {
  const [backendData, setBackendData] = useState<Device[]>([]);
  const [clientId, setClientId] = useState<'zoom' | 'flash'>('flash');

  useEffect(() => {
    fetch(`/devices/${clientId}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, [clientId]);

  const handleSelectChange = (event: React.FormEvent) => {
    const value = (event.target as any).value;
    setClientId(value);
  };

  return (
    <section>
      <select id="client" onChange={handleSelectChange}>
        <option value="flash">Flash</option>
        <option value="zoom">Zoom</option>
      </select>
      <table id="devices">
        <tr>
          <th>Serial Number</th>
          <th>Security Status</th>
        </tr>
        {backendData ? (
          backendData.map((device: Device, i: number) => (
            <DeviceComponent key={i} device={device}></DeviceComponent>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </table>
    </section>
  );
};

export default App;
