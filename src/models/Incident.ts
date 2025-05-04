import mongoose, { Document, Schema } from 'mongoose';

/**
 * Defines the severity levels for an incident.
 */
export type SeverityLevel = 'Low' | 'Medium' | 'High';

/**
 * Interface for an Incident document.
 */
export interface IIncident extends Document {
  title: string;
  description: string;
  severity: SeverityLevel;
  reported_at: Date;
}

/**
 * Schema definition for the Incident model.
 */
const IncidentSchema = new Schema<IIncident>({
  title: {
    type: String,
    required: [true, 'Incident title is required'],
    trim: true, // Ensures no unnecessary spaces
  },
  description: {
    type: String,
    required: [true, 'Incident description is required'],
    trim: true,
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: [true, 'Incident severity level is required'],
  },
  reported_at: {
    type: Date,
    default: Date.now,
    immutable: true, // Prevents modification after creation
  },
});

/**
 * Exporting the Incident model for usage in other parts of the application.
 */
export default mongoose.model<IIncident>('Incident', IncidentSchema);
