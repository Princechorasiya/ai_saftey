import { Router } from 'express';
import {
  getAllIncidents,
  getIncidentById,
  createIncident,
  deleteIncident
} from '../controllers/incidentController';

const router = Router();

// Define routes
router.get('/', getAllIncidents);
router.get('/:id', getIncidentById);
router.post('/', createIncident);
router.delete('/:id', deleteIncident);

export default router;