const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const cors = require('cors');
const connectDB = require('./dbConnection');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors());

// Use auth routes
app.use('/auth', authRoutes);

// Example route to ensure the server is working
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
