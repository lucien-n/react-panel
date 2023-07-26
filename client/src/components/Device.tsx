import { Device } from "../types/device";
import { Icon } from '@iconify/react';

const DeviceComponent = ({ device }: { device: Device; }) => {
    const millisecondsInThirtyDays = 30 * 24 * 60 * 60 * 1_000;
    const isDeviceSilent = (new Date().getTime() - new Date(device.lastCheckInDate * 1_000).getTime()) > millisecondsInThirtyDays;
    const isFullySecured = Object.values(device.security).every((security) => security === true);

    console.log(new Date().getTime() / 1000);

    return <tr>
        <td>
            {device.serialNumber}
        </td>
        <td>
            <span>
                {
                    isDeviceSilent ? (<Icon icon="mdi:clock" width="24px" color="gray" />) :
                        <>
                            {isFullySecured ? (<Icon icon="mdi:shield-check" width="24px" color="green" />) :
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