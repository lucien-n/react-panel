import { Box, TableCell } from "@mui/material";
import { TDevice } from "../types/device";
import { Icon } from "@iconify/react";
import { isHealthy, isSilent } from "../helper";

const DeviceSecurity = ({ device }: { device: TDevice }) => {
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
        {isSilent(device.lastCheckInDate) ? (
          <Icon icon="mdi:clock" width="24px" color="grey" />
        ) : isHealthy(device.security) ? (
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
