// Express routes for incident-related endpoints

const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incidentController");

// File a new incident report
router.post("/", incidentController.createIncident);

// View all incidents
router.get("/", incidentController.getAllIncidents);

// View a single incident by ID
router.get("/:id", incidentController.getIncidentById);

// Approve an incident (Security Staff)
router.patch("/:id/approve", incidentController.approveIncident);

module.exports = router;
