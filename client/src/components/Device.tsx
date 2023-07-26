import { Device } from "../types/device";
import { Icon } from '@iconify/react';

const DeviceComponent = ({ device }: { device: Device; }) => {

    return <tr>
        <td>
            {device.serialNumber}
        </td>
        <td>
            <span>
                {!device.security.antivirus ? (<Icon icon="mdi:antivirus" width="24px" color="red" />) : null}
                {!device.security.encryption ? (<Icon icon="mdi:lock-off" width="24px" color="red" />) : null}
                {!device.security.firewall ? (<Icon icon="mdi:wall" width="24px" color="red" />) : null}
            </span>
        </td>
    </tr>;
};

export default DeviceComponent;