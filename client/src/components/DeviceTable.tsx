import { Device } from "../types/device";
import DeviceComponent from "./Device";

const DeviceTableComponent = ({ devices }: { devices: Device[]; }) => {
    return <table id="devices">
        <tr>
            <th>Serial Number</th>
            <th>Security Status</th>
        </tr>
        {devices ? (
            devices.map((device: Device, i: number) => (
                <DeviceComponent key={i} device={device}></DeviceComponent>
            ))
        ) : (
            <p>Loading...</p>
        )}
    </table>;
};

export default DeviceTableComponent;