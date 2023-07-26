const express = require("express");
const devices = require("./devices.json");

const app = express();
const simulatedTimeout = 10;

app.use(function (req, res, next) {
    setTimeout(next, simulatedTimeout);
});

app.get("/devices/:id", (req, res) => {
    const clientId = req.params.id;

    const clientDevices = devices.devices.slice().filter((device) => device.clientId == clientId);

    res.json(clientDevices);
});

app.listen(5_000, () => {
    console.log("Server started on port 5000");
});
