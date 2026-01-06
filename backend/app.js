const express = require("express");
const incidentRoutes = require("./routes/incidentRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/incidents", incidentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Campus Security Incident Management API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
