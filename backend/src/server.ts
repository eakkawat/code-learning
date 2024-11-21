import express from 'express';
import mongoose from 'mongoose';
import routes from '@/routes';
import config from 'config';

const app = express();

// Middleware
app.use(express.json());

// Routes
routes(app);

// Database connection
mongoose.connect(config.get<string>('dbUri'), {});

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
