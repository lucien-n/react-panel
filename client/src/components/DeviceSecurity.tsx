import { Box, TableCell } from "@mui/material";
import { TDevice } from "../types/device";
import { Icon } from "@iconify/react";

const DeviceSecurity = ({ device }: { device: TDevice }) => {
  const isSilent = (): boolean => {
    return new Date().getTime() - device.lastCheckInDate > 30 * 24 * 60 * 60;
  };

  const isHealthy = (): boolean => {
    return Object.values(device.security).every((security) => security);
  };

  return (
    <TableCell>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "full",
        }}
      >
        {isSilent() ? (
          <Icon icon="mdi:clock" width="24px" color="grey" />
        ) : isHealthy() ? (
          <Icon icon="mdi:shield-check" width="24px" color="green" />
        ) : (
          <>
            {!device.security.antivirus ? (
              <Icon icon="mdi:antivirus" width="24px" color="red"></Icon>
            ) : null}

            {!device.security.firewall ? (
              <Icon icon="mdi:wall" width="24px" color="red"></Icon>
            ) : null}

            {!device.security.encryption ? (
              <Icon icon="mdi:lock" width="24px" color="red"></Icon>
            ) : null}
          </>
        )}
      </Box>
    </TableCell>
  );
};

export default DeviceSecurity;
