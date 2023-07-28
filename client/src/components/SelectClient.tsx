import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const SelectClient = ({
  clientId,
  setClientId,
}: {
  clientId: string;
  setClientId: any;
}) => {
  const [clients, setClients] = useState<string[]>([""]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch("/clients")
      .then((res) => (res.bodyUsed ? res.json() : res.json()))
      .then((data) => {
        setClients(data);
        setRefresh(false);
      });
  }, [refresh]);

  useEffect(() => {
    setClientId(clients[0]);
  }, [setClientId, clients]);

  const clientChange = (event: any) => {
    const id = (event.target as any).value;
    setClientId(id);
  };

  return (
    <>
      {clients ? (
        <FormControl>
          <Select
            label="Client"
            variant="filled"
            onChange={clientChange}
            value={clientId}
          >
            {clients.map((client: string, index: number) => (
              <MenuItem key={index} value={client}>
                {client.slice(0, 1).toUpperCase() +
                  client.slice(1, client.length)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Select
          variant="filled"
          label="No Client Found"
          defaultValue="no-client-found"
          disabled
        >
          <MenuItem value="no-client-found">No Client Found</MenuItem>
        </Select>
      )}
      <Button variant="contained" onClick={() => setRefresh(true)}>
        refresh
      </Button>
    </>
  );
};

export default SelectClient;
