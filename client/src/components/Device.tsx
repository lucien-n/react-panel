import { isDeviceSecured, isDeviceSilent } from "../helper";
import { Device } from "../types/device";
import { Icon } from '@iconify/react';

const DeviceComponent = ({ device }: { device: Device; }) => {

    console.log(new Date().getTime() / 1000);

    return <tr>
        <td>
            {device.serialNumber}
        </td>
        <td>
            <span>
                {
                    isDeviceSilent(device) ? (<Icon icon="mdi:clock" width="24px" color="gray" />) :
                        <>
                            {isDeviceSecured(device) ? (<Icon icon="mdi:shield-check" width="24px" color="green" />) :
                                <>
                                    {!device.security.antivirus ? (<Icon icon="mdi:antivirus" width="24px" color="red" />) : null}
                                    {!device.security.encryption ? (<Icon icon="mdi:lock-off" width="24px" color="red" />) : null}
                                    {!device.security.firewall ? (<Icon icon="mdi:wall" width="24px" color="red" />) : null}
                                </>
                            }
                        </>
                }

            </span>
        </td>
    </tr>;
};

export default DeviceComponent;