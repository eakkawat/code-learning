import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
