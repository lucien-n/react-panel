import { useEffect, useState } from "react";
import { Device } from "../types/device";
import DeviceComponent from "./Device";
import { getNumberOfHealthyDevices } from "../helper";
import SelectClientComponent from "./SelectClient";

import './Panel.css';
import SelectPageComponent from "./SelectPage";

const PanelComponent = () => {
    const clients = ['flash', 'zoom'];

    const [devices, setDevices] = useState<Device[]>([]);
    const [totalDevices, setTotalDevices] = useState<number>(0);
    const [clientId, setClientId] = useState<string>(clients[0]);
    const [pageNumber, setPageNumber] = useState<number>(0);

    useEffect(() => {
        fetch(`/devices/${clientId}/${pageNumber || 0}`)
            .then((response) => response.json())
            .then(({ devices, total }) => {
                setDevices(devices);
                setTotalDevices(total);
            });
    }, [clientId, pageNumber]);

    const percentageOfHealthyDevices = Math.floor((getNumberOfHealthyDevices(devices) / devices.length) * 100);

    const onPageChange = (event: React.FormEvent) => {
        const page = parseInt((event.target as any).value);
        setPageNumber(page);
    };

    return <>
        <section className="panel">
            <section id="panel-info" className="sidebar">
                <SelectClientComponent clients={clients} onChange={(client: string) => setClientId(client)} />
                <SelectPageComponent onChange={onPageChange} />
                {devices ? <p>{devices.length} device(s) on page</p> : <p>Please select a client</p>}
                {totalDevices ? <p>{totalDevices} device(s) total</p> : <p>Please select a client</p>}
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