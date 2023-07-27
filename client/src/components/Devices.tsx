import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { TDevice } from "../types/device";
import DeviceSecurity from "./DeviceSecurity";

const Devices = ({
  clientId,
  page,
  devices,
  setDevices,
  setTotalClientDevices,
}: {
  clientId: string;
  page: number;
  devices: TDevice[];
  setDevices: any;
  setTotalClientDevices: any;
}) => {
  useEffect(() => {
    if (clientId)
      fetch(`/devices/${clientId}/${page || 0}`)
        .then((res) => res.json())
        .then(({ devices: clientDevices, total: totalClientDevices }) => {
          setDevices(clientDevices);
          setTotalClientDevices(totalClientDevices);
        });
  }, [clientId, page, setDevices, setTotalClientDevices]);

  return (
    <>
      <TableContainer sx={{ maxHeight: "650px" }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "fontWeightBold",
                  bgcolor: "darkslategrey",
                  color: "white",
                }}
              >
                Serial Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "fontWeightBold",
                  bgcolor: "darkslategrey",
                  color: "white",
                }}
              >
                Security Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices ? (
              devices.map((device: any, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-chield td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{device.serialNumber}</TableCell>
                  <DeviceSecurity device={device}></DeviceSecurity>
                </TableRow>
              ))
            ) : (
              <p>Fetching dvices</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Devices;
