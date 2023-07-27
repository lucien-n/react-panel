import { Typography } from "@mui/material";
import { TDevice } from "./device";

const Info = ({
  devices,
  totalClientDevices,
}: {
  devices: TDevice[];
  totalClientDevices: number;
}) => {
  return (
    <>
      <Typography>{devices.length} device(s) currently displayed</Typography>
      <Typography>{totalClientDevices} device(s) total</Typography>
    </>
  );
};

export default Info;
