import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Mount the routes
// This tells Express that for any request that starts with '/api/posts',
// it should be handled by the 'postRoutes' router.
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('Successfully connected to MongoDB!');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
  
    console.error('Failed to connect to MongoDB', error);
    
    process.exit(1);
  }
};

startServer();