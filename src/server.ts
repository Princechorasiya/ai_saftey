import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database';
import incidentRoutes from './routes/incidentRoutes';

// Load environment variables
dotenv.config();

/**
 * Initializes Express application.
 */
const app = express();
const PORT = process.env.PORT || 3000;

// Establish database connection
connectDatabase();

// Apply middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Register routes
app.use('/incidents', incidentRoutes);

/**
 * Root route providing API status message.
 */
app.get('/', (req, res) => {
  res.send('AI Safety Incident Log API is operational.');
});

/**
 * Starts the Express server.
 */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
