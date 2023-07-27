import { useEffect, useState } from "react";
import { Device } from "../types/device";
import DeviceComponent from "./Device";
import { getNumberOfHealthyDevices } from "../helper";
import SelectClientComponent from "./SelectClient";

import './Panel.css';

const PanelComponent = () => {
    const clients = ['flash', 'zoom'];

    const [devices, setDevices] = useState<Device[]>([]);
    const [clientId, setClientId] = useState<string>(clients[0]);

    useEffect(() => {
        fetch(`/devices/${clientId}`)
            .then((response) => response.json())
            .then((data) => setDevices(data));
    }, [clientId]);

    const percentageOfHealthyDevices = Math.floor((getNumberOfHealthyDevices(devices) / devices.length) * 100);

    return <>
        <section className="panel">
            <section id="panel-info" className="sidebar">
                <SelectClientComponent clients={clients} onChange={(client: string) => setClientId(client)} />
                {devices ? <p>{devices.length} device(s)</p> : <p>Please select a client</p>}
                <p>{percentageOfHealthyDevices}% of devices are healthy</p>
            </section>
            <table id="panel-devices" className="content-table">
                <thead>

                    <tr>
                        <th>Serial Number</th>
                        <th>Security Status</th>
                    </tr>
                </thead>
                <tbody>
                    {devices ? (
                        devices.map((device: Device, i: number) => (
                            <DeviceComponent key={i} device={device} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </tbody>
            </table>
        </section>
    </>;
};

export default PanelComponent;