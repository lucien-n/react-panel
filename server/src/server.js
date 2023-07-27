const express = require("express");
const devices = require("./devices.json");

const app = express();
const simulatedTimeout = 10;
const maxElementsPerPage = 10;

app.use(function (req, res, next) {
    setTimeout(next, simulatedTimeout);
});

app.get("/devices/:id/:page?", (req, res) => {
    const clientId = req.params.id;

    if (!clientId) {
        res.status(422).send("Please provide an id");
    }

    const page = req.params.page ?? 0;

    const pageFactor = maxElementsPerPage * page;
    const clientDevices = devices.devices.slice().filter((device) => device.clientId == clientId);
    const totalClientDevices = clientDevices.length;
    const paginatedClientDevices = clientDevices.slice(0 + pageFactor, maxElementsPerPage + pageFactor);

    res.json({ devices: paginatedClientDevices, total: totalClientDevices });
});

app.listen(5_000, () => {
    console.log("Server started on port 5000");
});
