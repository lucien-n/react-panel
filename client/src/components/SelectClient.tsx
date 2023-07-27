import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const SelectClient = ({ setClientId }: { setClientId: any }) => {
  const [clients, setClients] = useState<string[]>([]);

  useEffect(() => {
    fetch("/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  useEffect(() => {
    setClientId(clients[0]);
  }, [setClientId, clients]);

  const clientChange = (event: any) => {
    const id = (event.target as any).value;
    setClientId(id);
  };

  return (
    <>
      {clients.length > 0 ? (
        <Select
          label="Client"
          variant="filled"
          onChange={clientChange}
          defaultValue={clients[0]}
        >
          {clients.map((client: string, index: number) => (
            <MenuItem key={index} value={client}>
              {client.slice(0, 1).toUpperCase() +
                client.slice(1, client.length)}
            </MenuItem>
          ))}
        </Select>
      ) : null}
    </>
  );
};

export default SelectClient;
