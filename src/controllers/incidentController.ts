
import { Request, Response } from 'express';
import Incident, { SeverityLevel } from '../models/Incident';

/**
 * Fetches all incidents from the database.
 */
export const getAllIncidents = async (req: Request, res: Response): Promise<void> => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    handleError(res, 'Error retrieving incidents', error);
  }
};

/**
 * Fetches a single incident by its ID.
 */
export const getIncidentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    res.status(200).json(incident);
  } catch (error) {
    handleError(res, 'Error retrieving incident', error);
  }
};

/**
 * Creates a new incident in the database.
 */
export const createIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, severity } = req.body;

    // Validate request body
    if (!title || !description || !severity) {
      res.status(400).json({ message: 'Title, description, and severity are required' });
      return;
    }

    // Validate severity level
    if (!isValidSeverity(severity)) {
      res.status(400).json({ message: 'Severity must be Low, Medium, or High' });
      return;
    }

    const newIncident = new Incident({ title, description, severity, reported_at: new Date() });
    const savedIncident = await newIncident.save();

    res.status(201).json(savedIncident);
  } catch (error) {
    handleError(res, 'Error creating incident', error);
  }
};

/**
 * Deletes an incident from the database.
 */
export const deleteIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);

    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    handleError(res, 'Error deleting incident', error);
  }
};

/**
 * Helper function to validate severity levels.
 */
const isValidSeverity = (severity: string): boolean => ['Low', 'Medium', 'High'].includes(severity);

/**
 * Centralized error handler for API responses.
 */
const handleError = (res: Response, message: string, error: unknown): void => {
  console.error(message, error);
  res.status(500).json({ message, error });
};
