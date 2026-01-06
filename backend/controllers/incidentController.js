// Controller for handling incident-related HTTP requests.
// This layer receives requests from routes and calls the model logic.

const incidentModel = require("../models/incidentModel");

// Create a new incident report
const createIncident = (req, res) => {
  const { title, description, reporter } = req.body;

  const newIncident = incidentModel.createIncident({
    title,
    description,
    reporter,
  });

  res.status(201).json(newIncident);
};

// Get all incidents
const getAllIncidents = (req, res) => {
  const incidents = incidentModel.getAllIncidents();
  res.json(incidents);
};

// Get incident by ID
const getIncidentById = (req, res) => {
  const { id } = req.params;
  const incident = incidentModel.getIncidentById(id);

  if (!incident) {
    return res.status(404).json({ message: "Incident not found" });
  }

  res.json(incident);
};

// Approve an incident (Security Staff)
const approveIncident = (req, res) => {
  const { id } = req.params;
  const approvedIncident = incidentModel.approveIncident(id);

  if (!approvedIncident) {
    return res.status(404).json({ message: "Incident not found" });
  }

  res.json(approvedIncident);
};

module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById,
  approveIncident,
};
