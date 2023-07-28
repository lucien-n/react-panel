import { isDeviceSecured, isDeviceSilent } from "../helper";
import { Device } from "../types/device";
import { Icon } from "@iconify/react";

const DeviceComponent = ({ device }: { device: Device }) => {
  const {
    security: { antivirus, encryption, firewall },
    serialNumber,
  } = device;

  return (
    <tr>
      <td>{serialNumber}</td>
      <td>
        <span>
          {isDeviceSilent(device) ? (
            <Icon icon="mdi:clock" width="24px" color="gray" />
          ) : (
            <>
              {isDeviceSecured(device) ? (
                <Icon icon="mdi:shield-check" width="24px" color="green" />
              ) : (
                <>
                  {!antivirus && (
                    <Icon icon="mdi:antivirus" width="24px" color="red" />
                  )}
                  {!encryption && (
                    <Icon icon="mdi:lock-off" width="24px" color="red" />
                  )}
                  {!firewall && (
                    <Icon icon="mdi:wall" width="24px" color="red" />
                  )}
                </>
              )}
            </>
          )}
        </span>
      </td>
    </tr>
  );
};

export default DeviceComponent;
