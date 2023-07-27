import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const SelectClient = ({ clientId, setClientId }: { clientId: any, setClientId: any; }) => {
    const [clients, setClients] = useState<string[]>([]);

    useEffect(() => {
        fetch('/clients')
            .then((res) => res.json())
            .then((data) => setClients(data));
    }, []);


    const clientChange = (event: any) => {
        const id = (event.target as any).value;
        setClientId(id);
    };

    return <>
        {
            clients ? (

                <Select defaultValue={clients[0]} onChange={clientChange}>
                    {
                        clients.map((client: string) => (
                            <MenuItem value={client}>{client.slice(0, 1).toUpperCase() + client.slice(1, client.length)}</MenuItem>
                        ))
                    }
                </Select>
            ) : null
        }</>;
};

export default SelectClient;