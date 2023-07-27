import { useEffect, useState } from "react";
import { getNumberOfHealthyDevices } from "../helper";
import { Device } from "../types/device";
import DeviceComponent from "./Device";
import SelectClientComponent from "./SelectClient";

import { Filter } from "../types/filter";
import FiltersComponent from "./Filters";
import "./Panel.css";
import SelectPageComponent from "./SelectPage";

const PanelComponent = () => {
    const clients = ["flash", "zoom"];
    const filters: Filter[] = [
        {
            name: "showSilentDevices",
            active: true,
        },
        {
            name: "showHealthyDevices",
            active: true,
        },
        {
            name: "antivirus",
            active: true,
        },
        {
            name: "firewall",
            active: true,
        },
        {
            name: "encryption",
            active: true,
        }
    ];

    const [devices, setDevices] = useState<Device[]>([]);
    const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
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


    const percentageOfHealthyDevices = Math.floor(
        (getNumberOfHealthyDevices(devices) / devices.length) * 100
    );


    const onPageChange = (event: React.FormEvent) => {
        const page = parseInt((event.target as any).value);
        setPageNumber(page);
    };

    // TODO: Filters
    useEffect(() => {
        setFilteredDevices(devices);
    }, [devices]);

    const filterDevices = (): Device[] => {
        const filtered: Device[] = [];

        filtered.push(...devices);

        return filtered;
    };

    const onFilterChange = (filter: Filter) => {
        const filtered = filterDevices();
        setFilteredDevices(filtered);
    };

    return (
        <>
            <section className="panel">
                <section id="panel-info" className="sidebar">
                    <SelectClientComponent
                        clients={clients}
                        onChange={(client: string) => setClientId(client)}
                    />
                    <SelectPageComponent onChange={onPageChange} />
                    {devices ? (
                        <p>{devices.length} device(s) on page</p>
                    ) : (
                        <p>Please select a client</p>
                    )}
                    {totalDevices ? (
                        <p>{totalDevices} device(s) total</p>
                    ) : (
                        <p>Please select a client</p>
                    )}
                    <p>{percentageOfHealthyDevices}% of devices are healthy</p>
                    <FiltersComponent filters={filters} onChange={onFilterChange} />
                </section>
                <table id="panel-devices" className="content-table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Security Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDevices ? (
                            filteredDevices.map((device: Device, index: number) => (
                                <DeviceComponent key={index} device={device} />
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default PanelComponent;
