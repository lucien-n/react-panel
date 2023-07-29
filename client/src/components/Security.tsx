import { Icon } from "@iconify/react";
import { isHealthy, isSilent } from "../helper";
import { TSecurity } from "../types/security";

export default function Security({
  lastCheckInDate,
  security,
}: {
  lastCheckInDate: number;
  security: TSecurity;
}) {
  const { firewall, antivirus, encryption } = security;

  return (
    <>
      {isSilent(lastCheckInDate) ? (
        <Icon icon="mdi:clock" width="24px" color="grey" />
      ) : isHealthy(security) ? (
        <Icon icon="mdi:shield-check" width="24px" color="green" />
      ) : (
        <>
          {!antivirus ? (
            <Icon icon="mdi:antivirus" width="24px" color="red"></Icon>
          ) : null}

          {!firewall ? (
            <Icon icon="mdi:wall" width="24px" color="red"></Icon>
          ) : null}

          {!encryption ? (
            <Icon icon="mdi:lock" width="24px" color="red"></Icon>
          ) : null}
        </>
      )}
    </>
  );
}
