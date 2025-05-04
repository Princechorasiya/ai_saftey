
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Incident from '../models/Incident';
import connectDatabase from './database';

dotenv.config();

/**
 * Sample incident data representing various AI-related issues.
 */
const sampleIncidents: Array<{ title: string; description: string; severity: string; reported_at: Date }> = [
  {
    title: 'Chatbot Generated Harmful Content',
    description: 'A public-facing chatbot generated instructions for creating harmful materials when asked leading questions.',
    severity: 'High',
    reported_at: new Date('2025-03-15T14:30:00'),
  },
  {
    title: 'Facial Recognition False Positives',
    description: 'AI surveillance system showed high false positive rates when identifying individuals from certain demographic groups.',
    severity: 'Medium',
    reported_at: new Date('2025-03-20T09:15:00'),
  },
  {
    title: 'Recommendation Algorithm Bias',
    description: 'Content recommendation system was found to reinforce existing user biases rather than providing diverse viewpoints.',
    severity: 'Low',
    reported_at: new Date('2025-04-01T11:45:00'),
  },
];

/**
 * Seeds the database with sample incident data.
 */
const seedDatabase = async (): Promise<void> => {
  try {
    console.log('Connecting to database...');
    await connectDatabase();

    console.log('Clearing existing incidents...');
    await Incident.deleteMany({});

    console.log('Inserting sample incidents...');
    await Incident.insertMany(sampleIncidents);

    console.log('Seeding complete. Disconnecting from database...');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error occurred while seeding the database:', error);
  }
};

// Execute the seeding function
seedDatabase();
