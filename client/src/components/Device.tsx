import { Device } from "../types/device";

const DeviceComponent = ({device}: {device: Device}) => {

    return <>
        <p>{device.serialNumber}</p>
    </>
}

export default DeviceComponent