import { useEffect, useState } from "react";
import { Device } from "./types/device";
import DeviceComponent from "./components/Device";

const App = () => {
  const [backendData, setBackendData] = useState<Device[]>([]);

  const clientId = 'flash';

  useEffect(() => {
    fetch(`/devices/${clientId}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData);

  return (
    <div>
      {backendData ? (
        backendData.map((device: Device, i: number) => (
          <DeviceComponent key={i} device={device}></DeviceComponent>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
