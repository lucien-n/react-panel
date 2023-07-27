import express from "express";
import database from "./database.json";

const app: express.Application = express();

const port: number = 5_000;
const devicePerPage: number = 10;
const simulatedTimeout: number = 10;

app.use(function (req, res, next) {
  setTimeout(next, simulatedTimeout);
});

app.get("/devices/:id/:page?", (req, res) => {
  const clientId = req.params.id;

  const page = parseInt(req.params.page ?? "0") || 0;

  const devices = database.devices
    .slice()
    .filter((device) => device.clientId == clientId);

  const totalDevices = devices.length;

  const pageFactor = page * devicePerPage;
  const pagedDevices = devices.slice(pageFactor, devicePerPage + pageFactor);

  res.json({ devices: pagedDevices, total: totalDevices });
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
