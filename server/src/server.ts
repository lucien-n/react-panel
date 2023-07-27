import express from "express";

const app: express.Application = express();

const port: number = 5_000;

app.get("/devices/:id", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
