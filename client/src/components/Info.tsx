import { Typography } from "@mui/material";
import { TDevice } from "../types/device";

const Info = ({
  devices,
  totalDevices,
}: {
  devices: TDevice[];
  totalDevices: number;
}) => {
  return (
    <>
      <Typography>{devices.length} device(s) currently displayed</Typography>
      <Typography>{totalDevices} device(s) total</Typography>
    </>
  );
};

export default Info;
