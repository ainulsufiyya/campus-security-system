// In-memory data store for incidents (no database yet)

let incidents = [];
let currentId = 1;

// Create a new incident
const createIncident = ({ title, description, reporter }) => {
  const incident = {
    id: currentId++,
    title,
    description,
    reporter,
    status: "Pending",
    createdAt: new Date().toISOString(),
    approvedAt: null,
  };

  incidents.push(incident);
  return incident;
};

// Get all incidents
const getAllIncidents = () => {
  return incidents;
};

// Get incident by ID
const getIncidentById = (id) => {
  return incidents.find((incident) => incident.id === parseInt(id));
};

// Approve an incident (Security Staff)
const approveIncident = (id) => {
  const incident = incidents.find(
    (incident) => incident.id === parseInt(id)
  );

  if (!incident) return null;

  incident.status = "Approved";
  incident.approvedAt = new Date().toISOString();
  return incident;
};

module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById,
  approveIncident,
};
