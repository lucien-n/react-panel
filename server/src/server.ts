import express from "express";
import database from "./database.json";

const app: express.Application = express();

const port: number = 5_000;

app.get("/devices/:id", (req, res) => {
  const clientId = req.params.id;

  const devices = database.devices
    .slice()
    .filter((device) => device.clientId == clientId);

  res.json(devices);
});

app.get("/devices", (req, res) => {
  const devices = database.devices;

  res.json(devices);
});

app.get("/clients", (req, res) => {
  const clients: string[] = [];

  database.devices.forEach(({ clientId }) => {
    if (clients.includes(clientId)) return;
    clients.push(clientId);
  });

  res.json(clients);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
