import { TableContainer, Table, TableCell, TableBody, TableRow, TableHead, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const Devices = ({ clientId }: { clientId: string; }) => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetch(`/devices/${clientId}`)
            .then((res) => res.json())
            .then((data) => setDevices(data));
    }, [clientId]);

    return <>
        <TableContainer sx={{ maxHeight: '650px' }} component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'fontWeightBold', bgcolor: 'darkslategrey', color: 'white' }}>Serial Number</TableCell>
                        <TableCell sx={{ fontWeight: 'fontWeightBold', bgcolor: 'darkslategrey', color: 'white' }}>Security Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        devices ? devices.map((device: any, index: number) => (
                            <TableRow key={index} sx={{ '&:last-chield td, &:last-child th': { border: 0 } }}>
                                <TableCell>{device.serialNumber}</TableCell>
                                <TableCell>Sec</TableCell>
                            </TableRow>
                        )) : <p>Fetching dvices</p>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>;
};

export default Devices;