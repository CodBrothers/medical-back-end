const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const authRoutes = require('./src/Routes/authRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
console.log(process.env.PORT);
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// Use auth routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
