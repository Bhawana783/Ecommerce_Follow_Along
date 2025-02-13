const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Use the login route
app.use('/api/auth', authRoutes);

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection failed', err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
