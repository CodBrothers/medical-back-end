const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use auth routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
