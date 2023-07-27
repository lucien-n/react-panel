import { TableContainer, Table, TableCell, TableBody, TableRow, TableHead, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import SelectClient from "./SelectClient";

const Panel = () => {
    const [devices, setDevices] = useState([]);
    const [clientId, setClientId] = useState<string>('');

    useEffect(() => {
        fetch(`/devices/${clientId}`)
            .then((res) => res.json())
            .then((data) => setDevices(data));
    }, [clientId]);

    return <>
        <SelectClient clientId={clientId} setClientId={setClientId} ></SelectClient>
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
        </TableContainer>;
    </>;
};

export default Panel;
