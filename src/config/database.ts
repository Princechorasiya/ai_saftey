
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Establishes a connection to the MongoDB database.
 */
const connectDatabase = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/ai_safety_incidents';

    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);

    // Exit the process only when it's necessary in a server environment
    process.exit(1);
  }
};

export default connectDatabase;
;